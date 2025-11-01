import { Header } from '@/components/public/header'
import { Footer } from '@/components/public/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, Heart, GraduationCap, MapPin, DollarSign, Clock } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import Link from 'next/link'

export default function SearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-6">Search Programs & Schools</h1>
            
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="What would you like to study? (e.g., computer science)"
                  className="pl-10 h-12"
                />
              </div>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="canada">🇨🇦 Canada</SelectItem>
                  <SelectItem value="usa">🇺🇸 USA</SelectItem>
                  <SelectItem value="uk">🇬🇧 UK</SelectItem>
                  <SelectItem value="australia">🇦🇺 Australia</SelectItem>
                  <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                  <SelectItem value="ireland">🇮🇪 Ireland</SelectItem>
                </SelectContent>
              </Select>

              <Button className="h-12 px-8">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>

            {/* Filters */}
            <div className="flex gap-3 mt-4 flex-wrap">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                All Filters
              </Button>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Program Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="postgraduate">Postgraduate</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Field of Study" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="cs">Computer Science</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">2000+</span> programs found
            </p>
            <Select defaultValue="relevant">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevant">Most Relevant</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Empty State / Coming Soon */}
          <Card>
            <CardContent className="p-12 text-center">
              <GraduationCap className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Database Setup Required
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                To see programs, you need to setup the Vercel Postgres database and run the seed script to populate universities and programs.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto text-left">
                <h4 className="font-semibold text-blue-900 mb-2">Next Steps:</h4>
                <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                  <li>Create Vercel Postgres database</li>
                  <li>Add connection strings to .env.local</li>
                  <li>Run: <code className="bg-blue-100 px-1 rounded">psql $POSTGRES_URL &lt; schema.sql</code></li>
                  <li>Create and run seed script to add universities</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Sample Program Cards (for reference) */}
          <div className="mt-8 grid grid-cols-1 gap-6 opacity-50">
            {[1, 2].map((i) => (
              <Card key={i} className="hover:shadow-lg transition cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <GraduationCap className="h-6 w-6 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Sample University</h3>
                          <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            City, Country
                          </p>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                        Bachelor of Computer Science
                      </h4>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary">Undergraduate</Badge>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          Fast Acceptance
                        </Badge>
                        <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                          Popular
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <DollarSign className="h-4 w-4 mr-1" />
                          $25,000/year
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          4 years
                        </div>
                        <div className="text-gray-600">
                          <span className="font-medium">Fall 2025</span> intake
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button size="icon" variant="ghost">
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
