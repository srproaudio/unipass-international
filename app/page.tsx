import { Header } from '@/components/public/header'
import { Footer } from '@/components/public/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'
import { Search, GraduationCap, Globe, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Future Goes Beyond Borders
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore 1,500+ global universities and colleges. Submit your best possible application with a 95% success rate. Unlock your full potential with UniPass!
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-14">
                Register Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-6">18 million searches and counting</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <Input 
                  placeholder="What would you like to study? (e.g., law)" 
                  className="flex-1 h-12"
                />
                <Select defaultValue="canada">
                  <SelectTrigger className="w-full md:w-48 h-12">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canada">🇨🇦 Canada</SelectItem>
                    <SelectItem value="usa">🇺🇸 United States</SelectItem>
                    <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                    <SelectItem value="australia">🇦🇺 Australia</SelectItem>
                    <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                    <SelectItem value="ireland">🇮🇪 Ireland</SelectItem>
                  </SelectContent>
                </Select>
                <Link href="/search" className="w-full md:w-auto">
                  <Button className="w-full h-12">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </Link>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">Popular searches: 
                  <Link href="/search?q=STEM" className="text-blue-600 hover:underline ml-1">STEM</Link>,
                  <Link href="/search?q=Computer+Science" className="text-blue-600 hover:underline ml-1">Computer Science</Link>,
                  <Link href="/search?q=Healthcare" className="text-blue-600 hover:underline ml-1">Healthcare</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Heading */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">
              The Fastest and Easiest Way to Successfully Study Abroad
            </h2>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">1.3M+</div>
                <div className="text-gray-600 text-sm">Students Helped</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <GraduationCap className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">140,000+</div>
                <div className="text-gray-600 text-sm">Global Programs</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Globe className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">1,500+</div>
                <div className="text-gray-600 text-sm">Institutions Globally</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-gray-600 text-sm">Nationalities</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Award className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
                <div className="text-gray-600 text-sm">Years of Expertise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Your Perfect Program */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Find Your Perfect Study Program</h2>
              <p className="text-lg text-gray-600 mb-8">
                We've spent a decade perfecting a faster, easier, quality-first international study application process. Now, the world is yours to explore in just a few clicks.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Easily apply to multiple programs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Find your perfect program from 140,000+ options</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Get a higher chance of success with AI technology</p>
                </div>
              </div>
              <Link href="/search">
                <Button size="lg" className="h-12">
                  Try It Today
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">FAQ's</h2>
              <p className="text-center text-gray-600 mb-8">Got Questions? We Have Answers</p>
              
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6">How can I find my dream program?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    It couldn't be easier! Register for a free UniPass account, then take a few short minutes to tell us about your educational goals. Our platform will suggest study programs just for your needs, and you'll have full access to explore the 140,000+ programs available.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6">How do I apply once I've found the right program?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    With the click of a button! UniPass will guide you through the whole process, from application to arrival. It's all online, free, and easy to use.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6">Why should I use UniPass?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    You can trust us: UniPass has helped over 1.3M+ students from 150+ countries. Plus, we'll give you the best chance of application success, with our 95% acceptance rate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6">Which countries can I apply to study in?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    UniPass gives you access to 1,500+ institutions in 6 top study destinations: Australia, Canada, Germany, Ireland, the United Kingdom (UK), and the United States (US).
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Choose from 140,000+ Study Programs</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Pick your programs. Apply all at once. Built-in quality checks give you a ~95% chance of application success.
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-8">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Get Started with UniPass</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 border rounded-lg">
                <GraduationCap className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Student</h3>
                <p className="text-gray-600 mb-4">
                  Are you looking to study in Canada, the US, the UK, Ireland, Australia, or Germany?
                </p>
                <Link href="/sign-up">
                  <Button className="w-full">Sign Up for Free</Button>
                </Link>
              </div>
              <div className="text-center p-6 border rounded-lg bg-gray-50">
                <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Recruitment Partner</h3>
                <p className="text-gray-600 mb-4">
                  Coming Soon
                </p>
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>
              <div className="text-center p-6 border rounded-lg bg-gray-50">
                <Globe className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Partner School</h3>
                <p className="text-gray-600 mb-4">
                  Coming Soon
                </p>
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
