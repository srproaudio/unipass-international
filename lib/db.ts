import { sql } from '@vercel/postgres'

// Database helper functions
export const db = {
  // Students
  async createStudent(clerkUserId: string, email: string) {
    return sql`
      INSERT INTO students (clerk_user_id, email, profile_completed)
      VALUES (${clerkUserId}, ${email}, false)
      RETURNING *
    `
  },

  async getStudentByClerkId(clerkUserId: string) {
    return sql`
      SELECT * FROM students WHERE clerk_user_id = ${clerkUserId}
    `
  },

  async updateStudent(id: string, data: any) {
    const fields = Object.keys(data)
      .map((key, i) => `${key} = $${i + 2}`)
      .join(', ')
    
    return sql.query(
      `UPDATE students SET ${fields}, updated_at = NOW() WHERE id = $1 RETURNING *`,
      [id, ...Object.values(data)]
    )
  },

  // Programs
  async searchPrograms(filters: {
    country?: string
    level?: string
    field?: string
    search?: string
    limit?: number
    offset?: number
  }) {
    const { limit = 12, offset = 0 } = filters
    
    let query = `
      SELECT p.*, s.name as school_name, s.logo_url as school_logo,
             s.city, s.province_state, c.name as country_name, c.code as country_code
      FROM programs p
      JOIN schools s ON p.school_id = s.id
      JOIN countries c ON s.country_id = c.id
      WHERE 1=1
    `
    
    const params: any[] = []
    let paramIndex = 1

    if (filters.country) {
      query += ` AND c.code = $${paramIndex}`
      params.push(filters.country)
      paramIndex++
    }

    if (filters.level) {
      query += ` AND p.level = $${paramIndex}`
      params.push(filters.level)
      paramIndex++
    }

    if (filters.field) {
      query += ` AND p.field_of_study ILIKE $${paramIndex}`
      params.push(`%${filters.field}%`)
      paramIndex++
    }

    if (filters.search) {
      query += ` AND (p.name ILIKE $${paramIndex} OR s.name ILIKE $${paramIndex})`
      params.push(`%${filters.search}%`)
      paramIndex++
    }

    query += ` ORDER BY s.popular DESC, p.created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`
    params.push(limit, offset)

    return sql.query(query, params)
  },

  async getProgram(id: string) {
    return sql`
      SELECT p.*, s.*, c.name as country_name, c.code as country_code
      FROM programs p
      JOIN schools s ON p.school_id = s.id
      JOIN countries c ON s.country_id = c.id
      WHERE p.id = ${id}
    `
  },

  // Schools
  async getSchool(slug: string) {
    return sql`
      SELECT s.*, c.name as country_name, c.code as country_code
      FROM schools s
      JOIN countries c ON s.country_id = c.id
      WHERE s.slug = ${slug}
    `
  },

  async getSchoolPrograms(schoolId: string) {
    return sql`
      SELECT * FROM programs WHERE school_id = ${schoolId}
    `
  },

  // Applications
  async createApplication(data: {
    student_id: string
    program_id: string
    intake_id?: string
    status?: string
  }) {
    return sql`
      INSERT INTO applications (student_id, program_id, intake_id, status, application_date)
      VALUES (${data.student_id}, ${data.program_id}, ${data.intake_id || null}, 
              ${data.status || 'draft'}, NOW())
      RETURNING *
    `
  },

  async getStudentApplications(studentId: string) {
    return sql`
      SELECT a.*, p.name as program_name, p.level, s.name as school_name,
             s.logo_url, c.name as country_name, c.code as country_code,
             pi.intake_name, pi.start_date
      FROM applications a
      JOIN programs p ON a.program_id = p.id
      JOIN schools s ON p.school_id = s.id
      JOIN countries c ON s.country_id = c.id
      LEFT JOIN program_intakes pi ON a.intake_id = pi.id
      WHERE a.student_id = ${studentId}
      ORDER BY a.created_at DESC
    `
  },

  async updateApplicationStatus(id: string, status: string) {
    return sql`
      UPDATE applications 
      SET status = ${status}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `
  },

  // Favorites
  async addFavorite(studentId: string, programId: string) {
    return sql`
      INSERT INTO favorites (student_id, program_id)
      VALUES (${studentId}, ${programId})
      ON CONFLICT (student_id, program_id) DO NOTHING
      RETURNING *
    `
  },

  async removeFavorite(studentId: string, programId: string) {
    return sql`
      DELETE FROM favorites 
      WHERE student_id = ${studentId} AND program_id = ${programId}
    `
  },

  async getStudentFavorites(studentId: string) {
    return sql`
      SELECT f.*, p.*, s.name as school_name, s.logo_url, c.name as country_name
      FROM favorites f
      JOIN programs p ON f.program_id = p.id
      JOIN schools s ON p.school_id = s.id
      JOIN countries c ON s.country_id = c.id
      WHERE f.student_id = ${studentId}
      ORDER BY f.created_at DESC
    `
  },

  // Countries
  async getCountries() {
    return sql`SELECT * FROM countries ORDER BY popular DESC, name ASC`
  },

  async getCountryByCode(code: string) {
    return sql`SELECT * FROM countries WHERE code = ${code}`
  }
}

export default db
