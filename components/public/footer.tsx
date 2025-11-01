import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About UniPass</h3>
            <p className="text-sm mb-4">
              Your gateway to global education. Apply to 1,500+ universities worldwide with a 95% success rate.
            </p>
            <p className="text-sm text-gray-400">101 Frederick St, Kitchener, ON</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/search" className="hover:text-white transition">Find Programs</Link></li>
              <li><Link href="/universities" className="hover:text-white transition">Universities</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Study Destinations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Study Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/canada" className="hover:text-white transition">🇨🇦 Canada</Link></li>
              <li><Link href="/usa" className="hover:text-white transition">🇺🇸 United States</Link></li>
              <li><Link href="/uk" className="hover:text-white transition">🇬🇧 United Kingdom</Link></li>
              <li><Link href="/australia" className="hover:text-white transition">🇦🇺 Australia</Link></li>
              <li><Link href="/germany" className="hover:text-white transition">🇩🇪 Germany</Link></li>
              <li><Link href="/ireland" className="hover:text-white transition">🇮🇪 Ireland</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>info@unipass.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2025 UniPass International. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
              <Link href="/legal" className="hover:text-white transition">Legal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
