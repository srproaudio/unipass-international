import { sql } from '@vercel/postgres'
import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const status = searchParams.get('status')

    let query = `
      SELECT 
        a.id, a.status, a.application_date, a.submission_date, a.decision_date,
        p.id as program_id, p.name as program_name,
        s.name as school_name, s.city, 
        c.name as country_name
      FROM applications a
      JOIN programs p ON a.program_id = p.id
      JOIN schools s ON p.school_id = s.id
      JOIN countries c ON s.country_id = c.id
      JOIN students st ON a.student_id = st.id
      WHERE st.clerk_user_id = $1
    `

    const params = [userId]

    if (status) {
      query += ` AND a.status = $2`
      params.push(status)
    }

    query += ` ORDER BY a.application_date DESC`

    const result = await sql.query(query, params)

    return NextResponse.json({ success: true, data: result.rows })
  } catch (error) {
    console.error('Get Applications Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
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
    const { program_id, intake_id } = body

    // Get student ID
    const studentResult = await sql.query(
      `SELECT id FROM students WHERE clerk_user_id = $1`,
      [userId]
    )

    if (studentResult.rows.length === 0) {
      return NextResponse.json({ error: 'Student not found' }, { status: 404 })
    }

    const studentId = studentResult.rows[0].id

    // Create application
    const result = await sql.query(
      `INSERT INTO applications (student_id, program_id, intake_id, status)
       VALUES ($1, $2, $3, 'draft')
       RETURNING *`,
      [studentId, program_id, intake_id]
    )

    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error('Create Application Error:', error)
    return NextResponse.json(
      { error: 'Failed to create application' },
      { status: 500 }
    )
  }
}
