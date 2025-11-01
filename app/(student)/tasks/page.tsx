import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  CheckCircle,
  Circle,
  Clock,
  AlertTriangle,
  FileText,
  Upload,
  Calendar,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'My Tasks | Uni Pass International',
  description: 'Track your application tasks and requirements'
}

const taskCategories = ['All Tasks', 'Pending', 'In Progress', 'Completed', 'Overdue']

const tasks = [
  {
    id: 1,
    title: 'Watch the training courses videos',
    description: 'Complete orientation training to understand the application process',
    category: 'Training',
    status: 'pending',
    priority: 'high',
    dueDate: '2024-11-15',
    progress: 0,
    actions: ['Watch Videos', 'Take Quiz']
  },
  {
    id: 2,
    title: 'Add your first student',
    description: 'Create student profile with basic information and preferences',
    category: 'Setup',
    status: 'pending',
    priority: 'high',
    dueDate: '2024-11-10',
    progress: 0,
    actions: ['Add Student Profile']
  },
  {
    id: 3,
    title: 'Create your first application',
    description: 'Start application process for selected programs',
    category: 'Application',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-11-20',
    progress: 25,
    actions: ['Select Programs', 'Upload Documents']
  },
  {
    id: 4,
    title: 'Review the application requirements',
    description: 'Check all required documents and criteria for target universities',
    category: 'Documentation',
    status: 'completed',
    priority: 'medium',
    dueDate: '2024-11-05',
    progress: 100,
    actions: ['Review Complete']
  },
  {
    id: 5,
    title: 'Submit the application to school',
    description: 'Final submission of completed application package',
    category: 'Application',
    status: 'pending',
    priority: 'high',
    dueDate: '2024-11-25',
    progress: 0,
    actions: ['Submit Application']
  },
  {
    id: 6,
    title: 'Track the application status',
    description: 'Monitor application progress and respond to university requests',
    category: 'Tracking',
    status: 'pending',
    priority: 'medium',
    dueDate: '2024-12-01',
    progress: 0,
    actions: ['Check Status', 'Respond to Requests']
  },
  {
    id: 7,
    title: 'Complete payment for your application',
    description: 'Process application fees and deposits for selected programs',
    category: 'Payment',
    status: 'pending',
    priority: 'high',
    dueDate: '2024-11-18',
    progress: 0,
    actions: ['Make Payment']
  },
  {
    id: 8,
    title: 'Explore more schools and programs',
    description: 'Research additional universities and backup options',
    category: 'Research',
    status: 'in-progress',
    priority: 'low',
    dueDate: '2024-11-30',
    progress: 60,
    actions: ['Browse Programs', 'Save Favorites']
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'completed': return CheckCircle
    case 'in-progress': return Clock
    case 'pending': return Circle
    default: return AlertTriangle
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed': return 'text-green-600 bg-green-50'
    case 'in-progress': return 'text-blue-600 bg-blue-50'
    case 'pending': return 'text-gray-600 bg-gray-50'
    default: return 'text-red-600 bg-red-50'
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800'
    case 'medium': return 'bg-yellow-100 text-yellow-800'
    case 'low': return 'bg-green-100 text-green-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function TasksPage() {
  const completedTasks = tasks.filter(task => task.status === 'completed').length
  const totalTasks = tasks.length
  const overallProgress = (completedTasks / totalTasks) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
              <p className="text-gray-600 mt-2">Track your application progress and complete important requirements</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm text-gray-500">Overall Progress</div>
                <div className="font-semibold">{completedTasks} of {totalTasks} completed</div>
              </div>
              <div className="w-16 h-16 flex items-center justify-center">
                <div className="relative w-12 h-12">
                  <Progress value={overallProgress} className="w-12 h-12 rotate-90" />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
                    {Math.round(overallProgress)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {taskCategories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Tasks Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {tasks.map((task) => {
            const StatusIcon = getStatusIcon(task.status)
            const isOverdue = new Date(task.dueDate) < new Date() && task.status !== 'completed'
            
            return (
              <Card key={task.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <StatusIcon className={`w-5 h-5 mt-1 ${getStatusColor(task.status).split(' ')[0]}`} />
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-6">{task.title}</CardTitle>
                        <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Badge variant="outline" className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      {isOverdue && (
                        <Badge variant="destructive" className="text-xs">
                          Overdue
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Progress */}
                    {task.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{task.progress}%</span>
                        </div>
                        <Progress value={task.progress} className="h-2" />
                      </div>
                    )}

                    {/* Due Date */}
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </div>

                    {/* Category */}
                    <div className="flex items-center">
                      <Badge variant="secondary" className="text-xs">
                        {task.category}
                      </Badge>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {task.actions.map((action, idx) => (
                        <Button key={idx} size="sm" variant="outline" className="text-xs">
                          {action}
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Essential Steps CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8 mt-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Complete Essential Steps</h2>
            <p className="text-blue-100 mb-6">
              Complete these actions to unlock your full potential on ApplyBoard and maximize your chances of success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Training
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View All Tasks
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}