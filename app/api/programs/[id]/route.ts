import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const programId = id

    const result = await sql.query(
      `
      SELECT 
        p.id, p.name, p.level, p.field_of_study, p.duration_months, 
        p.tuition_first_year, p.currency, p.description, p.requirements,
        s.id as school_id, s.name as school_name, s.city, s.province_state,
        s.website, s.established_year, s.description as school_description,
        c.name as country_name, c.code as country_code
      FROM programs p
      JOIN schools s ON p.school_id = s.id
      JOIN countries c ON s.country_id = c.id
      WHERE p.id = $1
      `,
      [programId]
    )

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Program not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: result.rows[0],
    })
  } catch (error) {
    console.error('Program Detail API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch program' },
      { status: 500 }
    )
  }
}
