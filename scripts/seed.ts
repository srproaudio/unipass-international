import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const universities = [
  {
    name: 'University of Toronto',
    country_code: 'CA',
    city: 'Toronto',
    province: 'Ontario',
    description: 'Leading research university in Canada with world-class programs',
    website: 'https://www.utoronto.ca',
    established: 1827,
  },
  {
    name: 'McGill University',
    country_code: 'CA',
    city: 'Montreal',
    province: 'Quebec',
    description: 'Canada\'s most international university with diverse student body',
    website: 'https://www.mcgill.ca',
    established: 1821,
  },
  {
    name: 'University of British Columbia',
    country_code: 'CA',
    city: 'Vancouver',
    province: 'British Columbia',
    description: 'Pacific Northwest\'s premier research institution',
    website: 'https://www.ubc.ca',
    established: 1908,
  },
  {
    name: 'MIT',
    country_code: 'US',
    city: 'Cambridge',
    province: 'Massachusetts',
    description: 'World\'s leading science and technology university',
    website: 'https://www.mit.edu',
    established: 1861,
  },
  {
    name: 'Harvard University',
    country_code: 'US',
    city: 'Cambridge',
    province: 'Massachusetts',
    description: 'Oldest institution of higher education in the United States',
    website: 'https://www.harvard.edu',
    established: 1636,
  },
  {
    name: 'Stanford University',
    country_code: 'US',
    city: 'Stanford',
    province: 'California',
    description: 'Silicon Valley\'s premier research university',
    website: 'https://www.stanford.edu',
    established: 1885,
  },
  {
    name: 'University of Oxford',
    country_code: 'GB',
    city: 'Oxford',
    province: 'England',
    description: 'World\'s oldest English-speaking university',
    website: 'https://www.ox.ac.uk',
    established: 1096,
  },
  {
    name: 'University of Cambridge',
    country_code: 'GB',
    city: 'Cambridge',
    province: 'England',
    description: 'Second oldest university in the English-speaking world',
    website: 'https://www.cam.ac.uk',
    established: 1209,
  },
  {
    name: 'London School of Economics',
    country_code: 'GB',
    city: 'London',
    province: 'England',
    description: 'Leading social sciences university in the world',
    website: 'https://www.lse.ac.uk',
    established: 1895,
  },
  {
    name: 'University of Melbourne',
    country_code: 'AU',
    city: 'Melbourne',
    province: 'Victoria',
    description: 'Australia\'s leading university and one of the world\'s best',
    website: 'https://www.unimelb.edu.au',
    established: 1853,
  },
  {
    name: 'University of Sydney',
    country_code: 'AU',
    city: 'Sydney',
    province: 'New South Wales',
    description: 'Australia\'s first university with a global reputation',
    website: 'https://www.sydney.edu.au',
    established: 1850,
  },
  {
    name: 'Australian National University',
    country_code: 'AU',
    city: 'Canberra',
    province: 'Australian Capital Territory',
    description: 'Australia\'s premier research university',
    website: 'https://www.anu.edu.au',
    established: 1946,
  },
  {
    name: 'Technische Universität München',
    country_code: 'DE',
    city: 'Munich',
    province: 'Bavaria',
    description: 'Germany\'s leading technical university',
    website: 'https://www.tum.de',
    established: 1868,
  },
  {
    name: 'University of Heidelberg',
    country_code: 'DE',
    city: 'Heidelberg',
    province: 'Baden-Württemberg',
    description: 'Germany\'s oldest university and a center of academic excellence',
    website: 'https://www.uni-heidelberg.de',
    established: 1386,
  },
  {
    name: 'Trinity College Dublin',
    country_code: 'IE',
    city: 'Dublin',
    province: 'Dublin',
    description: 'Ireland\'s leading university with a rich academic heritage',
    website: 'https://www.tcd.ie',
    established: 1592,
  },
  {
    name: 'University College Dublin',
    country_code: 'IE',
    city: 'Dublin',
    province: 'Dublin',
    description: 'Ireland\'s largest university with strong research programs',
    website: 'https://www.ucd.ie',
    established: 1854,
  },
  {
    name: 'National University of Singapore',
    country_code: 'SG',
    city: 'Singapore',
    province: 'Singapore',
    description: 'Asia\'s leading university with international outlook',
    website: 'https://www.nus.edu.sg',
    established: 1905,
  },
  {
    name: 'University of Tokyo',
    country_code: 'JP',
    city: 'Tokyo',
    province: 'Tokyo',
    description: 'Japan\'s premier research university',
    website: 'https://www.u-tokyo.ac.jp',
    established: 1877,
  },
]

const programs = [
  // MIT
  { uni_idx: 3, name: 'Masters in Computer Science', level: 'Masters', field: 'Computer Science', duration: 24, tuition: 59750 },
  { uni_idx: 3, name: 'Masters in Engineering', level: 'Masters', field: 'Engineering', duration: 24, tuition: 59750 },
  { uni_idx: 3, name: 'PhD in Artificial Intelligence', level: 'PhD', field: 'Computer Science', duration: 60, tuition: 0 },
  
  // Harvard
  { uni_idx: 4, name: 'Masters in Business Administration', level: 'Masters', field: 'Business', duration: 24, tuition: 73440 },
  { uni_idx: 4, name: 'Masters in Data Science', level: 'Masters', field: 'Computer Science', duration: 24, tuition: 65000 },
  
  // Stanford
  { uni_idx: 5, name: 'Masters in Computer Science', level: 'Masters', field: 'Computer Science', duration: 24, tuition: 60000 },
  { uni_idx: 5, name: 'Masters in Engineering', level: 'Masters', field: 'Engineering', duration: 24, tuition: 60000 },
  
  // University of Toronto
  { uni_idx: 0, name: 'Masters in Computer Science', level: 'Masters', field: 'Computer Science', duration: 24, tuition: 22000 },
  { uni_idx: 0, name: 'Masters in Business Administration', level: 'Masters', field: 'Business', duration: 24, tuition: 28000 },
  { uni_idx: 0, name: 'Masters in Engineering', level: 'Masters', field: 'Engineering', duration: 24, tuition: 25000 },
  
  // McGill University
  { uni_idx: 1, name: 'Masters in Computer Science', level: 'Masters', field: 'Computer Science', duration: 24, tuition: 21000 },
  { uni_idx: 1, name: 'Masters in Finance', level: 'Masters', field: 'Business', duration: 16, tuition: 20000 },
  
  // Oxford
  { uni_idx: 6, name: 'Masters in Philosophy', level: 'Masters', field: 'Humanities', duration: 12, tuition: 31600 },
  { uni_idx: 6, name: 'Masters in Economics', level: 'Masters', field: 'Business', duration: 12, tuition: 31600 },
  
  // Cambridge
  { uni_idx: 7, name: 'Masters in Computer Science', level: 'Masters', field: 'Computer Science', duration: 12, tuition: 36300 },
  { uni_idx: 7, name: 'Masters in Mathematics', level: 'Masters', field: 'Mathematics', duration: 12, tuition: 36300 },
  
  // LSE
  { uni_idx: 8, name: 'Masters in Finance', level: 'Masters', field: 'Business', duration: 12, tuition: 33120 },
  { uni_idx: 8, name: 'Masters in Economics', level: 'Masters', field: 'Economics', duration: 12, tuition: 33120 },
  
  // University of Melbourne
  { uni_idx: 9, name: 'Masters in Business Administration', level: 'Masters', field: 'Business', duration: 24, tuition: 32000 },
  { uni_idx: 9, name: 'Masters in Engineering', level: 'Masters', field: 'Engineering', duration: 24, tuition: 28000 },
  
  // TU Munich
  { uni_idx: 12, name: 'Masters in Computer Science', level: 'Masters', field: 'Computer Science', duration: 24, tuition: 0 },
  { uni_idx: 12, name: 'Masters in Engineering', level: 'Masters', field: 'Engineering', duration: 24, tuition: 0 },
  
  // Trinity College Dublin
  { uni_idx: 14, name: 'Masters in Computer Science', level: 'Masters', field: 'Computer Science', duration: 12, tuition: 13500 },
  { uni_idx: 14, name: 'Masters in Finance', level: 'Masters', field: 'Business', duration: 12, tuition: 13500 },
]

async function seed() {
  try {
    console.log('Starting database seed...')

    // Get country IDs
    const countryResult = await pool.query(`
      SELECT id, code FROM countries WHERE code IN ('CA', 'US', 'GB', 'AU', 'DE', 'IE', 'SG', 'JP')
    `)

    const countryMap: { [key: string]: string } = {}
    countryResult.rows.forEach((row: any) => {
      countryMap[row.code] = row.id
    })

    // Insert universities
    const schoolResults = []
    for (const uni of universities) {
      const result = await pool.query(
        `INSERT INTO schools (name, country_id, city, province_state, description, website, established_year, slug)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING id`,
        [
          uni.name,
          countryMap[uni.country_code],
          uni.city,
          uni.province,
          uni.description,
          uni.website,
          uni.established,
          uni.name.toLowerCase().replace(/\s+/g, '-'),
        ]
      )
      schoolResults.push(result.rows[0].id)
      console.log(`✓ Created: ${uni.name}`)
    }

    // Insert programs
    for (const prog of programs) {
      await pool.query(
        `INSERT INTO programs (school_id, name, level, field_of_study, duration_months, tuition_first_year, currency)
         VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [
          schoolResults[prog.uni_idx],
          prog.name,
          prog.level,
          prog.field,
          prog.duration,
          prog.tuition,
          'USD',
        ]
      )
      console.log(`  ✓ Added: ${prog.name}`)
    }

    console.log('\n✅ Database seed completed successfully!')
  } catch (error) {
    console.error('❌ Seed error:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

seed()
