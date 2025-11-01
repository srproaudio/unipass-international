-- UniPass International Database Schema

-- Students table (synced with Clerk users)
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  nationality TEXT,
  date_of_birth DATE,
  passport_number TEXT,
  address TEXT,
  city TEXT,
  country TEXT,
  postal_code TEXT,
  profile_photo_url TEXT,
  profile_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Education history
CREATE TABLE IF NOT EXISTS education_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  institution_name TEXT NOT NULL,
  country TEXT,
  degree_type TEXT,
  field_of_study TEXT,
  start_date DATE,
  end_date DATE,
  gpa TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Test scores
CREATE TABLE IF NOT EXISTS test_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  test_type TEXT NOT NULL,
  overall_score DECIMAL,
  listening_score DECIMAL,
  reading_score DECIMAL,
  writing_score DECIMAL,
  speaking_score DECIMAL,
  test_date DATE,
  expiry_date DATE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Countries
CREATE TABLE IF NOT EXISTS countries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT UNIQUE NOT NULL,
  code TEXT UNIQUE NOT NULL,
  flag_emoji TEXT,
  description TEXT,
  popular BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Universities/Schools
CREATE TABLE IF NOT EXISTS schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  country_id UUID REFERENCES countries(id),
  city TEXT,
  province_state TEXT,
  logo_url TEXT,
  banner_url TEXT,
  description TEXT,
  website TEXT,
  established_year INTEGER,
  ranking INTEGER,
  popular BOOLEAN DEFAULT FALSE,
  slug TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Programs
CREATE TABLE IF NOT EXISTS programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  level TEXT NOT NULL,
  field_of_study TEXT,
  duration_months INTEGER,
  tuition_first_year DECIMAL,
  application_fee DECIMAL,
  currency TEXT DEFAULT 'USD',
  description TEXT,
  requirements TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Program intakes
CREATE TABLE IF NOT EXISTS program_intakes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
  intake_name TEXT NOT NULL,
  start_date DATE,
  application_deadline DATE,
  available BOOLEAN DEFAULT TRUE
);

-- Program tags
CREATE TABLE IF NOT EXISTS program_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
  tag TEXT NOT NULL
);

-- Student applications
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  program_id UUID REFERENCES programs(id),
  intake_id UUID REFERENCES program_intakes(id),
  status TEXT DEFAULT 'draft',
  application_date TIMESTAMP,
  submission_date TIMESTAMP,
  decision_date TIMESTAMP,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Application timeline (history)
CREATE TABLE IF NOT EXISTS application_timeline (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  description TEXT,
  created_by TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Documents
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  application_id UUID REFERENCES applications(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  status TEXT DEFAULT 'pending',
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Student favorites (saved programs)
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(student_id, program_id)
);

-- Notifications
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  link TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_students_clerk_user_id ON students(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_applications_student_id ON applications(student_id);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_programs_school_id ON programs(school_id);
CREATE INDEX IF NOT EXISTS idx_programs_level ON programs(level);
CREATE INDEX IF NOT EXISTS idx_schools_country_id ON schools(country_id);
CREATE INDEX IF NOT EXISTS idx_documents_student_id ON documents(student_id);
CREATE INDEX IF NOT EXISTS idx_favorites_student_id ON favorites(student_id);
CREATE INDEX IF NOT EXISTS idx_notifications_student_id ON notifications(student_id);

-- Insert initial countries
INSERT INTO countries (name, code, flag_emoji, popular, description) VALUES
('Canada', 'CA', '🇨🇦', true, 'Study in Canada and experience world-class education'),
('United States', 'US', '🇺🇸', true, 'Explore top universities in the United States'),
('United Kingdom', 'GB', '🇬🇧', true, 'Discover prestigious UK universities'),
('Australia', 'AU', '🇦🇺', true, 'Study in Australia with excellent post-study opportunities'),
('Germany', 'DE', '🇩🇪', true, 'Experience quality education in Germany'),
('Ireland', 'IE', '🇮🇪', true, 'Study in the welcoming environment of Ireland')
ON CONFLICT (code) DO NOTHING;
