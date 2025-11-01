import { sql } from '@vercel/postgres'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const country = searchParams.get('country')
    const level = searchParams.get('level')
    const field = searchParams.get('field')
    const limit = parseInt(searchParams.get('limit') || '20')
    const offset = parseInt(searchParams.get('offset') || '0')

    let query = `
      SELECT 
        p.id, p.name, p.level, p.field_of_study, p.duration_months, 
        p.tuition_first_year, p.currency,
        s.id as school_id, s.name as school_name, s.city, s.province_state,
        c.name as country_name, c.code as country_code
      FROM programs p
      JOIN schools s ON p.school_id = s.id
      JOIN countries c ON s.country_id = c.id
      WHERE 1=1
    `

    const params: any[] = []

    if (country) {
      query += ` AND c.code = $${params.length + 1}`
      params.push(country)
    }

    if (level) {
      query += ` AND p.level = $${params.length + 1}`
      params.push(level)
    }

    if (field) {
      query += ` AND p.field_of_study ILIKE $${params.length + 1}`
      params.push(`%${field}%`)
    }

    query += ` ORDER BY p.name ASC LIMIT $${params.length + 1} OFFSET $${params.length + 2}`
    params.push(limit)
    params.push(offset)

    const result = await sql.query(query, params)

    return NextResponse.json({
      success: true,
      data: result.rows,
      count: result.rows.length,
    })
  } catch (error) {
    console.error('Programs API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch programs' },
      { status: 500 }
    )
  }
}
