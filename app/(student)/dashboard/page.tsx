import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  GraduationCap, 
  Plus,
  Users,
  BookOpen,
  ExternalLink,
  AlertCircle,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const userName = "Shaji Surteeb Rizvi"
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blue notification banner */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex items-center">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Test Solutions Have Moved:</strong> The Test Solutions section is no longer available. 
              To view available Test options and make voucher purchases, please visit the 360 Solutions Hub. 
              You'll find updated pricing, availability, and a better experience, all in one place.
            </p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <Button size="sm" className="text-blue-700 hover:bg-blue-100">
                Go to Hub
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {userName}!</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your applications</p>
          </div>
          <div className="flex space-x-3">
            <Button size="lg" variant="outline" className="border-blue-200">
              <Plus className="mr-2 h-4 w-4" />
              New service
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Add new student
            </Button>
          </div>
        </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
              <FileText className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
            <div className="text-sm text-gray-600">Tasks</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
            <div className="text-sm text-gray-600">Applications</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-pink-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-pink-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
            <div className="text-sm text-gray-600">Accepted</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-lg flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">0</div>
            <div className="text-sm text-gray-600">Rejected</div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">3</div>
            <div className="text-sm text-gray-600">Students</div>
          </CardContent>
        </Card>
      </div>

      {/* Essential Steps */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Essential steps</CardTitle>
            <Badge className="bg-blue-600 text-white">PREFERRED PARTNERS</Badge>
          </div>
          <p className="text-gray-600">Complete these actions to unlock your full potential on ApplyBoard</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 border-2 border-gray-300 rounded-sm"></div>
                <div>
                  <Link href="/trainhub" className="text-blue-600 hover:underline font-medium">
                    Watch the training courses videos
                  </Link>
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 border-2 border-gray-300 rounded-sm"></div>
                <div>
                  <Link href="/students" className="text-blue-600 hover:underline font-medium">
                    Add your first student
                  </Link>
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 border-2 border-gray-300 rounded-sm"></div>
                <div>
                  <Link href="/applications" className="text-blue-600 hover:underline font-medium">
                    Create your first application
                  </Link>
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 border-2 border-gray-300 rounded-sm"></div>
                <div>
                  <Link href="/payments" className="text-blue-600 hover:underline font-medium">
                    Complete payment for your application
                  </Link>
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 border-2 border-gray-300 rounded-sm"></div>
                <div>
                  <Link href="/applications" className="text-blue-600 hover:underline font-medium">
                    Review the application requirements
                  </Link>
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 border-2 border-gray-300 rounded-sm"></div>
                <div>
                  <Link href="/applications" className="text-blue-600 hover:underline font-medium">
                    Submit the application to school
                  </Link>
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 border-2 border-gray-300 rounded-sm"></div>
                <div>
                  <Link href="/applications" className="text-blue-600 hover:underline font-medium">
                    Track the application status
                  </Link>
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-4 h-4 mt-1 border-2 border-gray-300 rounded-sm"></div>
                <div>
                  <Link href="/programs" className="text-blue-600 hover:underline font-medium">
                    Explore more schools and programs
                  </Link>
                  <ExternalLink className="inline w-3 h-3 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Task Management */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Task management</CardTitle>
          <p className="text-gray-600">A list of important application requirements</p>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <Clock className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No tasks assigned yet</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Additional Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Applications - Empty State */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications yet</h3>
                <p className="text-gray-600 mb-6">
                  Start browsing programs and submit your first application
                </p>
                <Link href="/programs">
                  <Button>Browse Programs</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Preferred Partners */}
        <div>
          <Card className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
            <CardContent className="p-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">PREFERRED</h3>
                <h3 className="text-lg font-semibold mb-4">PARTNERS</h3>
                <p className="text-sm mb-4 text-blue-100">Brought to you by ApplyBoard</p>
                
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">Hi, {userName.split(' ')[0]} {userName.split(' ')[1]} {userName.split(' ')[2]}</h4>
                      <p className="text-sm text-blue-100">
                        Welcome. Your improved recruitment journey is just getting started!
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-3 text-blue-600 bg-white hover:bg-blue-50 border-white"
                  >
                    Start Up
                  </Button>
                </div>

                <div className="text-left">
                  <h4 className="font-semibold mb-2">Your Progress So Far</h4>
                  <div className="bg-white/10 rounded p-3 mb-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Unique "Ready for Visa" Applicants in the past 12 months</span>
                      <span className="font-bold">0</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-blue-100 mb-4">
                    You're 1 unique "Ready for Visa" applicants away from reaching Bronze status.
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-blue-600 bg-white hover:bg-blue-50 border-white"
                  >
                    Explore Your Benefits
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
    </div>
  )
}
