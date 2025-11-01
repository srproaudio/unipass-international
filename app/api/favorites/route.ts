import { sql } from '@vercel/postgres'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const result = await sql.query(
      `
      SELECT 
        f.id, f.created_at,
        p.id as program_id, p.name as program_name, p.level, p.field_of_study,
        p.tuition_first_year, p.duration_months,
        s.name as school_name, s.city,
        c.name as country_name, c.code as country_code
      FROM favorites f
      JOIN programs p ON f.program_id = p.id
      JOIN schools s ON p.school_id = s.id
      JOIN countries c ON s.country_id = c.id
      JOIN students st ON f.student_id = st.id
      WHERE st.clerk_user_id = $1
      ORDER BY f.created_at DESC
      `,
      [userId]
    )

    return NextResponse.json({ success: true, data: result.rows })
  } catch (error) {
    console.error('Get Favorites Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch favorites' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { program_id } = body

    // Get student ID
    const studentResult = await sql.query(
      `SELECT id FROM students WHERE clerk_user_id = $1`,
      [userId]
    )

    if (studentResult.rows.length === 0) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }

    const studentId = studentResult.rows[0].id

    // Add to favorites
    await sql.query(
      `INSERT INTO favorites (student_id, program_id)
       VALUES ($1, $2)
       ON CONFLICT DO NOTHING`,
      [studentId, program_id]
    )

    return NextResponse.json({ success: true, message: 'Added to favorites' })
  } catch (error) {
    console.error('Add Favorite Error:', error)
    return NextResponse.json(
      { error: 'Failed to add favorite' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { program_id } = body

    // Get student ID
    const studentResult = await sql.query(
      `SELECT id FROM students WHERE clerk_user_id = $1`,
      [userId]
    )

    if (studentResult.rows.length === 0) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }

    const studentId = studentResult.rows[0].id

    // Remove from favorites
    await sql.query(
      `DELETE FROM favorites WHERE student_id = $1 AND program_id = $2`,
      [studentId, program_id]
    )

    return NextResponse.json({ success: true, message: 'Removed from favorites' })
  } catch (error) {
    console.error('Delete Favorite Error:', error)
    return NextResponse.json(
      { error: 'Failed to remove favorite' },
      { status: 500 }
    )
  }
}
