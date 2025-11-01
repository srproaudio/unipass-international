import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Download,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Star,
  ExternalLink,
  Filter,
  Search
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Offers Dashboard | Uni Pass International',
  description: 'Track and manage your university offers and applications'
}

const offers = [
  {
    id: 1,
    university: 'University of Toronto',
    program: 'Master of Science in Computer Science',
    location: 'Toronto, Ontario, Canada',
    status: 'accepted',
    offerDate: '2024-10-25',
    responseDeadline: '2024-12-15',
    tuitionFee: 'CAD $55,000',
    startDate: 'September 2025',
    duration: '2 years',
    conditions: ['Meet English proficiency requirements', 'Submit final transcripts'],
    documents: ['Offer Letter', 'Study Permit Requirements'],
    ranking: 18,
    acceptanceRate: '43%'
  },
  {
    id: 2,
    university: 'University of British Columbia',
    program: 'MBA - Master of Business Administration',
    location: 'Vancouver, BC, Canada',
    status: 'conditional',
    offerDate: '2024-10-20',
    responseDeadline: '2024-11-30',
    tuitionFee: 'CAD $89,000',
    startDate: 'September 2025',
    duration: '20 months',
    conditions: ['Complete prerequisite courses', 'Achieve IELTS 7.0', 'Submit work experience verification'],
    documents: ['Conditional Offer Letter', 'Prerequisites List'],
    ranking: 34,
    acceptanceRate: '38%'
  },
  {
    id: 3,
    university: 'McGill University',
    program: 'Master of Engineering in Software Engineering',
    location: 'Montreal, Quebec, Canada',
    status: 'rejected',
    offerDate: '2024-10-15',
    responseDeadline: null,
    tuitionFee: 'CAD $48,000',
    startDate: 'September 2025',
    duration: '16 months',
    conditions: [],
    documents: ['Rejection Letter', 'Feedback Report'],
    ranking: 27,
    acceptanceRate: '35%'
  },
  {
    id: 4,
    university: 'University of Waterloo',
    program: 'Master of Mathematics in Data Science',
    location: 'Waterloo, Ontario, Canada',
    status: 'pending',
    offerDate: null,
    responseDeadline: null,
    tuitionFee: 'CAD $52,000',
    startDate: 'September 2025',
    duration: '2 years',
    conditions: [],
    documents: ['Application Confirmation'],
    ranking: 15,
    acceptanceRate: '28%'
  },
  {
    id: 5,
    university: 'Western University',
    program: 'Master of Science in Data Science',
    location: 'London, Ontario, Canada',
    status: 'accepted',
    offerDate: '2024-10-28',
    responseDeadline: '2024-12-20',
    tuitionFee: 'CAD $42,000',
    startDate: 'January 2025',
    duration: '2 years',
    conditions: ['Submit English test results'],
    documents: ['Offer Letter', 'Program Details'],
    ranking: 45,
    acceptanceRate: '52%'
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'accepted': return CheckCircle
    case 'conditional': return Clock
    case 'rejected': return XCircle
    case 'pending': return Clock
    default: return Clock
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'accepted': return 'bg-green-100 text-green-800'
    case 'conditional': return 'bg-yellow-100 text-yellow-800'
    case 'rejected': return 'bg-red-100 text-red-800'
    case 'pending': return 'bg-blue-100 text-blue-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function OffersPage() {
  const acceptedOffers = offers.filter(offer => offer.status === 'accepted').length
  const conditionalOffers = offers.filter(offer => offer.status === 'conditional').length
  const rejectedOffers = offers.filter(offer => offer.status === 'rejected').length
  const pendingOffers = offers.filter(offer => offer.status === 'pending').length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Offers Dashboard</h1>
              <p className="text-gray-600 mt-2">Track and manage your university offers and application status</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FileText className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600">{acceptedOffers}</div>
              <div className="text-sm text-gray-600">Accepted</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-yellow-600">{conditionalOffers}</div>
              <div className="text-sm text-gray-600">Conditional</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600">{pendingOffers}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-red-600">{rejectedOffers}</div>
              <div className="text-sm text-gray-600">Rejected</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Tabs */}
        <div className="flex items-center justify-between mb-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="all">All Offers ({offers.length})</TabsTrigger>
                <TabsTrigger value="accepted">Accepted ({acceptedOffers})</TabsTrigger>
                <TabsTrigger value="conditional">Conditional ({conditionalOffers})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({pendingOffers})</TabsTrigger>
                <TabsTrigger value="rejected">Rejected ({rejectedOffers})</TabsTrigger>
              </TabsList>
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

            <TabsContent value="all" className="space-y-6 mt-6">
              <div className="grid gap-6">
                {offers.map((offer) => {
                  const StatusIcon = getStatusIcon(offer.status)
                  const isUrgent = offer.responseDeadline && new Date(offer.responseDeadline) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                  
                  return (
                    <Card key={offer.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4">
                            <StatusIcon className={`w-6 h-6 mt-1 ${getStatusColor(offer.status).includes('green') ? 'text-green-600' : 
                                                                  getStatusColor(offer.status).includes('yellow') ? 'text-yellow-600' :
                                                                  getStatusColor(offer.status).includes('red') ? 'text-red-600' : 'text-blue-600'}`} />
                            <div>
                              <CardTitle className="text-xl">{offer.university}</CardTitle>
                              <p className="text-lg text-gray-700 font-medium">{offer.program}</p>
                              <div className="flex items-center text-gray-600 mt-2">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span className="text-sm">{offer.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <Badge className={getStatusColor(offer.status)}>
                              {offer.status.charAt(0).toUpperCase() + offer.status.slice(1)}
                            </Badge>
                            {isUrgent && offer.status !== 'rejected' && (
                              <Badge variant="destructive" className="text-xs">
                                Response Due Soon
                              </Badge>
                            )}
                            <div className="flex items-center text-sm text-gray-500">
                              <Star className="w-4 h-4 mr-1 text-yellow-500" />
                              Rank #{offer.ranking}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-3 gap-6">
                          {/* Program Details */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Program Details</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center">
                                <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                                <span>Tuition: {offer.tuitionFee}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                <span>Start: {offer.startDate}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                                <span>Duration: {offer.duration}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="w-4 h-4 mr-2 text-gray-400" />
                                <span>Acceptance Rate: {offer.acceptanceRate}</span>
                              </div>
                            </div>
                          </div>

                          {/* Important Dates */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Important Dates</h4>
                            <div className="space-y-2 text-sm">
                              {offer.offerDate && (
                                <div>
                                  <span className="text-gray-500">Offer Date:</span>
                                  <p>{new Date(offer.offerDate).toLocaleDateString()}</p>
                                </div>
                              )}
                              {offer.responseDeadline && (
                                <div>
                                  <span className="text-gray-500">Response Deadline:</span>
                                  <p className={isUrgent ? 'text-red-600 font-medium' : ''}>
                                    {new Date(offer.responseDeadline).toLocaleDateString()}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900">Actions</h4>
                            <div className="space-y-2">
                              {offer.documents.map((doc, idx) => (
                                <Button key={idx} variant="outline" size="sm" className="w-full justify-start">
                                  <Download className="w-4 h-4 mr-2" />
                                  {doc}
                                </Button>
                              ))}
                              {offer.status === 'accepted' && (
                                <Button className="w-full bg-green-600 hover:bg-green-700">
                                  Accept Offer
                                </Button>
                              )}
                              {offer.status === 'conditional' && (
                                <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                                  View Conditions
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Conditions */}
                        {offer.conditions.length > 0 && (
                          <div className="mt-6 pt-6 border-t">
                            <h4 className="font-semibold text-gray-900 mb-3">Offer Conditions</h4>
                            <ul className="space-y-1">
                              {offer.conditions.map((condition, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-start">
                                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 mt-2"></div>
                                  {condition}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            {/* Other tab contents would filter the offers array similarly */}
          </Tabs>
        </div>

        {/* Next Steps CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 mt-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Accept Your Offer?</h2>
            <p className="text-green-100 mb-6">
              Congratulations on your offers! Take the next step in your journey by accepting your preferred program 
              and beginning the visa application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Visa Process
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Compare Offers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}