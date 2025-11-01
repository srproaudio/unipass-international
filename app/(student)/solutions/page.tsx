import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap,
  FileText,
  CreditCard,
  Home,
  Plane,
  Users,
  BookOpen,
  Award,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: '360 Solutions | Uni Pass International',
  description: 'Complete solutions from application to arrival'
}

const solutions = [
  {
    icon: FileText,
    title: 'Application Support',
    description: 'Complete application assistance with quality checks and AI technology',
    features: ['Document review', 'Application tracking', 'Quality assurance', 'Status updates'],
    status: 'Available'
  },
  {
    icon: BookOpen,
    title: 'Language Tests',
    description: 'Instant vouchers for IELTS, TOEFL, and other language proficiency tests',
    features: ['Test vouchers', 'Test preparation', 'Score reporting', 'Test centers'],
    status: 'Available'
  },
  {
    icon: CreditCard,
    title: 'Financial Services',
    description: 'Flexible student loans and financial planning assistance',
    features: ['Student loans', 'Payment plans', 'Financial counseling', 'Scholarship guidance'],
    status: 'Available'
  },
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Find and book verified student housing near your institution',
    features: ['Housing search', 'Virtual tours', 'Booking assistance', 'Local guidance'],
    status: 'Coming Soon'
  },
  {
    icon: Plane,
    title: 'Travel & Visa',
    description: 'Visa application support and travel arrangements',
    features: ['Visa guidance', 'Document prep', 'Travel booking', 'Pre-departure support'],
    status: 'Available'
  },
  {
    icon: Users,
    title: 'Community Connect',
    description: 'Connect with other international students and mentors',
    features: ['Student network', 'Mentorship', 'Events', 'Local community'],
    status: 'Available'
  }
]

const stats = [
  { label: 'Students Helped', value: '1.3M+' },
  { label: 'Success Rate', value: '95%' },
  { label: 'Global Programs', value: '140,000+' },
  { label: 'Partner Institutions', value: '1,500+' }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">360 Solutions</h1>
              <p className="text-gray-600 mt-2">Find Every Solution, From Applications to Accommodations</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Globe className="w-4 h-4 mr-2" />
              Explore All Services
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <solution.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <CardTitle className="text-lg">{solution.title}</CardTitle>
                      <Badge 
                        variant={solution.status === 'Available' ? 'default' : 'secondary'}
                        className="mt-1"
                      >
                        {solution.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full mt-4" 
                  variant={solution.status === 'Available' ? 'default' : 'outline'}
                  disabled={solution.status !== 'Available'}
                >
                  {solution.status === 'Available' ? 'Get Started' : 'Coming Soon'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 mt-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 mb-6">
              Access our full 360 Solutions, covering everything from application to arrival. 
              Get instant language test vouchers, explore financial services, and invest in your future.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}