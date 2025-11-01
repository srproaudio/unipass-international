import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FileText, Clock, CheckCircle2, XCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function ApplicationsPage() {
  const applications = [] // Will be populated from DB

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-600 mt-1">Track and manage all your university applications</p>
        </div>
        <Link href="/search">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            + New Application
          </Button>
        </Link>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 max-w-2xl">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="submitted">Submitted</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <EmptyApplicationsState />
        </TabsContent>

        <TabsContent value="draft" className="mt-6">
          <EmptyApplicationsState />
        </TabsContent>

        <TabsContent value="submitted" className="mt-6">
          <EmptyApplicationsState />
        </TabsContent>

        <TabsContent value="accepted" className="mt-6">
          <EmptyApplicationsState />
        </TabsContent>

        <TabsContent value="rejected" className="mt-6">
          <EmptyApplicationsState />
        </TabsContent>
      </Tabs>

      {/* Sample Application Card (when data exists) */}
      <div className="hidden">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">University Name</h3>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    In Progress
                  </span>
                </div>
                <p className="text-gray-600 mb-2">Masters in Computer Science</p>
                <p className="text-sm text-gray-500">Fall 2024 Intake • Applied on Oct 15, 2024</p>
              </div>
              <Button variant="outline" className="ml-4">View Details</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function EmptyApplicationsState() {
  return (
    <Card>
      <CardContent className="p-12 text-center">
        <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No applications yet</h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Start your application journey by browsing programs and submitting your first application
        </p>
        <Link href="/search">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Browse Programs
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
