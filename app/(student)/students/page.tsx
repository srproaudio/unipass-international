import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  Users,
  Plus,
  Search,
  Filter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  ExternalLink,
  Edit,
  FileText
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Students | Uni Pass International',
  description: 'Manage your students and their applications'
}

const students = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    country: 'India',
    status: 'Active',
    applications: 3,
    accepted: 1,
    lastActivity: '2024-10-28',
    targetCountries: ['Canada', 'Australia'],
    programs: ['Computer Science', 'Data Science']
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    phone: '+1 (555) 234-5678',
    country: 'China',
    status: 'Active',
    applications: 5,
    accepted: 2,
    lastActivity: '2024-10-30',
    targetCountries: ['USA', 'UK'],
    programs: ['MBA', 'Business Administration']
  },
  {
    id: 3,
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '+91 98765 43210',
    country: 'India',
    status: 'Pending Documents',
    applications: 2,
    accepted: 0,
    lastActivity: '2024-10-25',
    targetCountries: ['Canada', 'Germany'],
    programs: ['Engineering', 'Masters in Engineering']
  }
]

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Students</h1>
              <p className="text-gray-600 mt-2">Manage and track your students' applications</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add New Student
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input 
                placeholder="Search students..."
                className="pl-10 w-80"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          <div className="text-sm text-gray-600">
            Showing {students.length} students
          </div>
        </div>

        {/* Students Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {students.map((student) => (
            <Card key={student.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{student.name}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {student.country}
                        </div>
                        <Badge variant={student.status === 'Active' ? 'default' : 'secondary'}>
                          {student.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-700">{student.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-700">{student.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-gray-700">Last active: {new Date(student.lastActivity).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Application Stats */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Application Progress</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{student.applications}</div>
                        <div className="text-xs text-gray-600">Applications</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">{student.accepted}</div>
                        <div className="text-xs text-gray-600">Accepted</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-600">{student.applications - student.accepted}</div>
                        <div className="text-xs text-gray-600">Pending</div>
                      </div>
                    </div>
                  </div>

                  {/* Target Countries */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Target Countries</h4>
                    <div className="flex flex-wrap gap-1">
                      {student.targetCountries.map((country, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Programs of Interest */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Programs of Interest</h4>
                    <div className="flex flex-wrap gap-1">
                      {student.programs.map((program, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {program}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between pt-4 border-t">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Applications
                      </Button>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State for when adding first student */}
        {students.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No students yet</h3>
              <p className="text-gray-600 mb-6">Add your first student to start managing applications</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Student
              </Button>
            </CardContent>
          </Card>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 mt-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Streamline Student Management</h2>
            <p className="text-purple-100 mb-6">
              Keep track of all your students in one place. Monitor their application progress, 
              manage documents, and ensure no important deadlines are missed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Import Students
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Student Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}