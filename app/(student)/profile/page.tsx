import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { User, BookOpen, Award, Edit2, Plus } from 'lucide-react'
import ProfileForm from '@/components/student/forms/profile-form'
import EducationForm from '@/components/student/forms/education-form'
import TestScoreForm from '@/components/student/forms/test-score-form'

export default function ProfilePage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
          <p className="text-gray-600 mt-1">Manage your personal information and academic details</p>
        </div>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="personal" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Personal</span>
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Education</span>
          </TabsTrigger>
          <TabsTrigger value="tests" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span className="hidden sm:inline">Tests</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Personal Information</span>
                <Edit2 className="h-5 w-5 text-gray-400" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ProfileForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Education History</CardTitle>
                <Button size="sm" variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Education
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">No education records</h3>
                  <p className="text-sm text-gray-600 mb-4">Add your education history to help us match you with the best programs</p>
                  <Button variant="outline" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add First Education
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <EducationForm />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tests" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Test Scores</CardTitle>
                <Button size="sm" variant="outline" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Add Test Score
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Award className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">No test scores</h3>
                  <p className="text-sm text-gray-600 mb-4">Add standardized test scores like IELTS, TOEFL, or GMAT</p>
                  <Button variant="outline" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add First Test Score
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <TestScoreForm />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
