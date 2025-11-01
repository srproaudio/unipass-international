import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Search,
  Filter,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Star,
  Heart,
  BookOpen,
  GraduationCap,
  Globe,
  ChevronDown
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Programs & Schools Search | Uni Pass International',
  description: 'Find and explore universities and programs worldwide'
}

const programs = [
  {
    id: 1,
    university: 'University of Toronto',
    program: 'Master of Science in Computer Science',
    location: 'Toronto, Ontario, Canada',
    tuition: 'CAD $55,000/year',
    duration: '2 years',
    startDate: 'September 2025',
    ranking: 18,
    acceptanceRate: '43%',
    requirements: ['Bachelor\'s degree', 'IELTS 7.0', 'GPA 3.3+'],
    highlights: ['Research opportunities', 'Co-op program', 'Industry partnerships'],
    category: 'Computer Science',
    level: 'Masters',
    country: 'Canada',
    favorite: false
  },
  {
    id: 2,
    university: 'Stanford University',
    program: 'Master of Science in Data Science',
    location: 'Stanford, California, USA',
    tuition: 'USD $58,416/year',
    duration: '2 years',
    startDate: 'September 2025',
    ranking: 2,
    acceptanceRate: '4%',
    requirements: ['Bachelor\'s degree', 'TOEFL 100', 'GRE required'],
    highlights: ['Silicon Valley location', 'World-class faculty', 'Startup ecosystem'],
    category: 'Data Science',
    level: 'Masters',
    country: 'USA',
    favorite: true
  },
  {
    id: 3,
    university: 'University of Cambridge',
    program: 'MPhil in Advanced Computer Science',
    location: 'Cambridge, England, UK',
    tuition: 'GBP £37,284/year',
    duration: '1 year',
    startDate: 'October 2025',
    ranking: 3,
    acceptanceRate: '21%',
    requirements: ['First-class honours', 'IELTS 7.5', 'Strong research background'],
    highlights: ['Historic university', 'Research excellence', 'Small cohorts'],
    category: 'Computer Science',
    level: 'Masters',
    country: 'UK',
    favorite: false
  },
  {
    id: 4,
    university: 'University of Melbourne',
    program: 'Master of Information Technology',
    location: 'Melbourne, Victoria, Australia',
    tuition: 'AUD $48,768/year',
    duration: '2 years',
    startDate: 'February 2025',
    ranking: 14,
    acceptanceRate: '67%',
    requirements: ['Bachelor\'s degree', 'IELTS 6.5', 'Relevant experience'],
    highlights: ['Industry connections', 'Flexible specializations', 'Work opportunities'],
    category: 'Information Technology',
    level: 'Masters',
    country: 'Australia',
    favorite: false
  },
  {
    id: 5,
    university: 'Technical University of Munich',
    program: 'Master of Science in Informatics',
    location: 'Munich, Bavaria, Germany',
    tuition: 'EUR €150/semester',
    duration: '2 years',
    startDate: 'October 2025',
    ranking: 50,
    acceptanceRate: '35%',
    requirements: ['Bachelor\'s degree', 'German/English proficiency', 'Strong mathematics'],
    highlights: ['Low tuition fees', 'Strong engineering', 'Research focus'],
    category: 'Computer Science',
    level: 'Masters',
    country: 'Germany',
    favorite: true
  },
  {
    id: 6,
    university: 'Trinity College Dublin',
    program: 'MSc in Computer Science',
    location: 'Dublin, Ireland',
    tuition: 'EUR €25,020/year',
    duration: '1 year',
    startDate: 'September 2025',
    ranking: 108,
    acceptanceRate: '58%',
    requirements: ['Bachelor\'s degree', 'IELTS 6.5', 'Programming experience'],
    highlights: ['European tech hub', 'English-speaking', 'Work visa opportunities'],
    category: 'Computer Science',
    level: 'Masters',
    country: 'Ireland',
    favorite: false
  }
]

const countries = ['All Countries', 'Australia', 'Canada', 'Germany', 'Ireland', 'United Kingdom', 'United States']
const levels = ['All Levels', 'Undergraduate', 'Masters', 'PhD', 'Diploma']
const categories = ['All Fields', 'Computer Science', 'Data Science', 'Information Technology', 'Engineering', 'Business']

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Program</h1>
            <p className="text-gray-600 mt-2">Explore 140,000+ programs from 1,500+ institutions worldwide</p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mt-8">
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <Input 
                    placeholder="What would you like to study? (e.g., computer science, MBA)"
                    className="pl-10 h-12 text-lg"
                  />
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                  Search
                </Button>
              </div>
              
              {/* Filters */}
              <div className="flex gap-2 justify-center flex-wrap">
                <Button variant="outline" size="sm">
                  <Globe className="w-4 h-4 mr-2" />
                  {countries[0]}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="sm">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {levels[0]}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {categories[0]}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Showing {programs.length} programs
            </h2>
            <p className="text-gray-600 text-sm">Found programs matching your search criteria</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              My Favorites ({programs.filter(p => p.favorite).length})
            </Button>
            <Button variant="outline" size="sm">
              Sort by: Relevance
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl text-blue-600 hover:text-blue-700 cursor-pointer">
                          {program.program}
                        </CardTitle>
                        <p className="text-lg font-medium text-gray-800">{program.university}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                        <Heart className={`w-5 h-5 ${program.favorite ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{program.location}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        Rank #{program.ranking}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {program.acceptanceRate} acceptance rate
                      </div>
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
                        <span>Tuition: {program.tuition}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        <span>Duration: {program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        <span>Starts: {program.startDate}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">
                        {program.level}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {program.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Requirements</h4>
                    <ul className="space-y-1">
                      {program.requirements.map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-2"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Highlights</h4>
                    <ul className="space-y-1">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2 mt-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Compare
                    </Button>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Programs
          </Button>
          <p className="text-sm text-gray-600 mt-2">
            Showing 6 of 140,000+ programs available
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mt-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-blue-100 mb-6">
              Found the perfect programs? Start your application process now and get expert guidance 
              every step of the way with our 95% success rate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Application
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Get Expert Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}