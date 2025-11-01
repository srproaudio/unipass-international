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
import Image from 'next/image'
import { Search, GraduationCap, Globe, Users, Award, CheckCircle2, Star, Quote } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-900">Your Future Goes</span>
              <br />
              <span className="text-blue-600">Beyond Borders</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore 1,500+ global universities and colleges. Submit your best possible application with a 95% success rate. Unlock your full potential with ApplyBoard!
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 h-14 rounded-lg">
                Register Now
              </Button>
            </Link>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-8">18 million searches and counting</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <Input 
                  placeholder="What would you like to study? (e.g., law)" 
                  className="flex-1 h-14 text-base"
                />
                <Select defaultValue="canada">
                  <SelectTrigger className="w-full md:w-64 h-14">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="germany">Germany</SelectItem>
                    <SelectItem value="ireland">Ireland</SelectItem>
                  </SelectContent>
                </Select>
                <Link href="/search" className="w-full md:w-auto">
                  <Button className="w-full md:w-auto h-14 px-12 bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                    Search
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Heading & Statistics */}
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
                  <p className="text-gray-700">Find your perfect program from 140,000+ options in five top destinations</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Get a higher chance of success with quality checks and AI technology</p>
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

        {/* 360 Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Accommodations</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Access our full 360 Solutions, covering everything from application to arrival. Get instant language test vouchers, explore financial services, and invest in your future with flexible student loans. It's all here.
              </p>
              <Link href="/sign-up">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-10 text-base font-semibold">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">What Our Students Have to Say</h2>
              <p className="text-center text-gray-600 text-lg mb-12">Hear from real international students about their experience.</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <Quote className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Like an answer from heaven</h4>
                      <p className="text-gray-700 italic mb-4">
                        "I tried [applying to institutions] and it took months, and months, and months for me to get an answer from a school. But then I stumbled upon UniPass, and it was like an answer from heaven."
                      </p>
                      <p className="text-blue-600 font-medium">— Arabelle A.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <Quote className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">All thanks to UniPass</h4>
                      <p className="text-gray-700 italic mb-4">
                        "I wanted to make my parents proud, and they are proud. And it was all thanks to UniPass."
                      </p>
                      <p className="text-blue-600 font-medium">— Krupali P.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Partners Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">TRUSTED PARTNERS</h2>
              <p className="text-center text-gray-600 mb-12">Trusted by 1,500+ Universities, Colleges, and Schools Worldwide</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Canada */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center">🇨🇦 Canada</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Western University</h4>
                      <p className="text-sm text-gray-600">London, Ontario, CA</p>
                      <p className="text-sm text-gray-700 mt-1">Since 1878, Western University has been a choice destination for minds seeking the best education...</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Laurentian University</h4>
                      <p className="text-sm text-gray-600">Sudbury, Ontario, CA</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Lakehead University</h4>
                      <p className="text-sm text-gray-600">Thunder Bay, Ontario, CA</p>
                    </div>
                  </div>
                </div>
                
                {/* United States */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center">🇺🇸 United States</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Southern New Hampshire University</h4>
                      <p className="text-sm text-gray-600">Manchester, New Hampshire, US</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">University of Arizona</h4>
                      <p className="text-sm text-gray-600">Tucson, Arizona, US</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Cal State Northridge</h4>
                      <p className="text-sm text-gray-600">Northridge, California, US</p>
                    </div>
                  </div>
                </div>
                
                {/* United Kingdom */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center">🇬🇧 United Kingdom</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Bournemouth University</h4>
                      <p className="text-sm text-gray-600">Bournemouth, South West, GB</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">University of Greenwich</h4>
                      <p className="text-sm text-gray-600">London, Greater London, GB</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">University of Edinburgh</h4>
                      <p className="text-sm text-gray-600">Edinburgh, Scotland, GB</p>
                    </div>
                  </div>
                </div>
                
                {/* Germany */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center">🇩🇪 Germany</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Hochschule Fresenius</h4>
                      <p className="text-sm text-gray-600">Berlin, Berlin, DE</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Mediadesign Hochschule</h4>
                      <p className="text-sm text-gray-600">Berlin, Berlin, DE</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">University of Europe</h4>
                      <p className="text-sm text-gray-600">Iserlohn, Nordrhein-Westfalen, DE</p>
                    </div>
                  </div>
                </div>
                
                {/* Australia */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center">🇦🇺 Australia</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Griffith University</h4>
                      <p className="text-sm text-gray-600">Southport, Queensland, AU</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">La Trobe University</h4>
                      <p className="text-sm text-gray-600">Bundoora, Victoria, AU</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Deakin University</h4>
                      <p className="text-sm text-gray-600">Geelong, Victoria, AU</p>
                    </div>
                  </div>
                </div>
                
                {/* Ireland */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center">🇮🇪 Ireland</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Dublin Business School</h4>
                      <p className="text-sm text-gray-600">Dublin, County of Dublin, IE</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">University College Cork</h4>
                      <p className="text-sm text-gray-600">Cork, County of Cork, IE</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-blue-600">Trinity College Dublin</h4>
                      <p className="text-sm text-gray-600">Dublin, County of Dublin, IE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">FAQ's</h2>
              <p className="text-center text-gray-600 text-lg mb-10">Got Questions? We Have Answers</p>
              
              <Accordion type="single" collapsible className="bg-white rounded-lg border shadow-sm">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6">How can I find my dream program?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    It couldn't be easier! Register for a free UniPass account, then take a few short minutes to tell us about your educational goals and set up your profile. Our platform will suggest study programs just for your needs, and you'll have full access to explore the 140,000+ programs available through our AI-guided search.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="px-6">How do I apply once I've found the right program?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    With the click of a button! UniPass will guide you through the whole process, from application to arrival. It's all online, free, and easy to use. We can even help connect you with other services, like loans, language tests, and visa support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6">Why should I use UniPass?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    You can trust us: UniPass has helped over 1.3M+ students from 150+ countries. Plus, we'll give you the best chance of application success, with our 95% acceptance rate. It can be confusing to apply directly to a university or college—one missed document or wrong detail could disqualify you! So, UniPass walks you through everything step-by-step to make sure you don't miss a thing.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="px-6">Which countries can I apply to study in?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    UniPass gives you access to 1,500+ institutions in 6 top study destinations: Australia, Canada, Germany, Ireland, the United Kingdom (UK), and the United States (US).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="px-6">I've applied, so what's next?</AccordionTrigger>
                  <AccordionContent className="px-6">
                    Now, we wait for the university or college to make a decision. Once you get an offer, you may need to pay a tuition deposit to hold your spot. Then it's time to apply for your student visa. Finally, you can celebrate and start packing for your study abroad adventure!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Choose from 140,000+ Study Programs</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Pick your programs. Apply all at once. Built-in quality checks give you a ~95% chance of application success.
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-14 px-10 font-semibold">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get Started with ApplyBoard</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">
                  <Image 
                    src="/homepage-images/Frame-32212-7-827x1024.webp" 
                    alt="Student" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Student</h3>
                  <p className="text-gray-700 mb-6">
                    Are you a student looking to study in Canada, the US, the UK, Ireland, Australia, or Germany? Register to launch your journey now!
                  </p>
                  <Link href="/sign-up">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold">Sign Up for Free</Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">
                  <Image 
                    src="/homepage-images/Frame-32213-3.webp" 
                    alt="Recruitment Partner" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Recruitment Partner</h3>
                  <p className="text-gray-700 mb-6">
                    Do you recruit and guide international students? Join our partner network and revolutionize your process!
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold">
                    Become a Recruitment Partner
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">
                  <Image 
                    src="/homepage-images/Firefly-4k-photorealistic-business-man-smiling-while-holding-laptop-wearing-dark-blue-suit-standin-1-1.webp" 
                    alt="Partner School" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Partner School</h3>
                  <p className="text-gray-700 mb-6">
                    Join 1,500+ global institutions on the ApplyBoard platform! Complete our contact form, and our Partner Relations team will be in touch soon.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold">
                    Become a Partner Institution
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
