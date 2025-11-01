export interface Student {
  id: string
  clerk_user_id: string
  email: string
  first_name?: string
  last_name?: string
  phone?: string
  nationality?: string
  date_of_birth?: Date
  passport_number?: string
  address?: string
  city?: string
  country?: string
  postal_code?: string
  profile_photo_url?: string
  profile_completed: boolean
  created_at: Date
  updated_at: Date
}

export interface EducationHistory {
  id: string
  student_id: string
  institution_name: string
  country?: string
  degree_type?: string
  field_of_study?: string
  start_date?: Date
  end_date?: Date
  gpa?: string
  completed: boolean
  created_at: Date
}

export interface TestScore {
  id: string
  student_id: string
  test_type: string
  overall_score?: number
  listening_score?: number
  reading_score?: number
  writing_score?: number
  speaking_score?: number
  test_date?: Date
  expiry_date?: Date
  created_at: Date
}

export interface Country {
  id: string
  name: string
  code: string
  flag_emoji?: string
  description?: string
  popular: boolean
  created_at: Date
}

export interface School {
  id: string
  name: string
  country_id: string
  city?: string
  province_state?: string
  logo_url?: string
  banner_url?: string
  description?: string
  website?: string
  established_year?: number
  ranking?: number
  popular: boolean
  slug: string
  created_at: Date
  updated_at: Date
}

export interface Program {
  id: string
  school_id: string
  name: string
  level: string
  field_of_study?: string
  duration_months?: number
  tuition_first_year?: number
  application_fee?: number
  currency: string
  description?: string
  requirements?: string
  created_at: Date
  updated_at: Date
}

export interface ProgramIntake {
  id: string
  program_id: string
  intake_name: string
  start_date?: Date
  application_deadline?: Date
  available: boolean
}

export interface ProgramTag {
  id: string
  program_id: string
  tag: string
}

export interface Application {
  id: string
  student_id: string
  program_id: string
  intake_id?: string
  status: 'draft' | 'submitted' | 'under_review' | 'accepted' | 'rejected' | 'cancelled'
  application_date?: Date
  submission_date?: Date
  decision_date?: Date
  notes?: string
  created_at: Date
  updated_at: Date
}

export interface ApplicationTimeline {
  id: string
  application_id: string
  status: string
  description?: string
  created_by: string
  created_at: Date
}

export interface Document {
  id: string
  student_id: string
  application_id?: string
  name: string
  type: string
  file_url: string
  file_size?: number
  mime_type?: string
  status: 'pending' | 'verified' | 'rejected'
  uploaded_at: Date
}

export interface Favorite {
  id: string
  student_id: string
  program_id: string
  created_at: Date
}

export interface Notification {
  id: string
  student_id: string
  type: string
  title: string
  message?: string
  link?: string
  read: boolean
  created_at: Date
}

// Extended types with relations
export interface ProgramWithSchool extends Program {
  school: School
  country: Country
  intakes: ProgramIntake[]
  tags: ProgramTag[]
}

export interface ApplicationWithDetails extends Application {
  program: Program
  school: School
  intake?: ProgramIntake
  timeline: ApplicationTimeline[]
  documents: Document[]
}
