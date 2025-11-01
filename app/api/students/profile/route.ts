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
      `SELECT * FROM students WHERE clerk_user_id = $1`,
      [userId]
    )

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Student profile not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: result.rows[0] })
  } catch (error) {
    console.error('Get Profile Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
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
    const {
      first_name,
      last_name,
      phone,
      nationality,
      date_of_birth,
      passport_number,
      address,
      city,
      country,
      postal_code,
    } = body

    // Check if student exists
    const existing = await sql.query(
      `SELECT id FROM students WHERE clerk_user_id = $1`,
      [userId]
    )

    if (existing.rows.length === 0) {
      // Create new student
      const email = await getClerkUserEmail(userId)
      await sql.query(
        `INSERT INTO students (clerk_user_id, email, first_name, last_name, phone, nationality, date_of_birth, passport_number, address, city, country, postal_code, profile_completed)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, true)`,
        [userId, email, first_name, last_name, phone, nationality, date_of_birth, passport_number, address, city, country, postal_code]
      )
    } else {
      // Update existing student
      await sql.query(
        `UPDATE students 
         SET first_name = $1, last_name = $2, phone = $3, nationality = $4, 
             date_of_birth = $5, passport_number = $6, address = $7, city = $8, 
             country = $9, postal_code = $10, profile_completed = true, updated_at = NOW()
         WHERE clerk_user_id = $11`,
        [first_name, last_name, phone, nationality, date_of_birth, passport_number, address, city, country, postal_code, userId]
      )
    }

    return NextResponse.json({ success: true, message: 'Profile updated' })
  } catch (error) {
    console.error('Update Profile Error:', error)
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    )
  }
}

async function getClerkUserEmail(userId: string): Promise<string> {
  // This would call Clerk API to get user email
  // For now, returning placeholder
  return `user_${userId}@unipass.local`
}
