'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="UniPass International"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
            Home
          </Link>
          
          <div className="relative group">
            <button className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              Study Destinations
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <Link href="/canada" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">🇨🇦 Canada</Link>
                <Link href="/usa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">🇺🇸 United States</Link>
                <Link href="/uk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">🇬🇧 United Kingdom</Link>
                <Link href="/australia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">🇦🇺 Australia</Link>
                <Link href="/germany" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">🇩🇪 Germany</Link>
                <Link href="/ireland" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">🇮🇪 Ireland</Link>
              </div>
            </div>
          </div>

          <Link href="/search" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
            Search Programs
          </Link>
          
          <Link href="/universities" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
            Universities
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <SignedOut>
            <Link href="/sign-in">
              <Button variant="ghost" className="hidden md:inline-flex">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-blue-600 hover:bg-blue-700">Register Now</Button>
            </Link>
          </SignedOut>
          
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="hidden md:inline-flex">Dashboard</Button>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                  Home
                </Link>
                <div className="space-y-2 pl-4">
                  <p className="text-sm font-semibold text-gray-500">Study Destinations</p>
                  <Link href="/canada" className="block text-base text-gray-700 hover:text-blue-600">🇨🇦 Canada</Link>
                  <Link href="/usa" className="block text-base text-gray-700 hover:text-blue-600">🇺🇸 USA</Link>
                  <Link href="/uk" className="block text-base text-gray-700 hover:text-blue-600">🇬🇧 UK</Link>
                  <Link href="/australia" className="block text-base text-gray-700 hover:text-blue-600">🇦🇺 Australia</Link>
                  <Link href="/germany" className="block text-base text-gray-700 hover:text-blue-600">🇩🇪 Germany</Link>
                  <Link href="/ireland" className="block text-base text-gray-700 hover:text-blue-600">🇮🇪 Ireland</Link>
                </div>
                <Link href="/search" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                  Search Programs
                </Link>
                <SignedOut>
                  <Link href="/sign-in" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                    Sign In
                  </Link>
                  <Link href="/sign-up">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard" className="text-lg font-medium text-gray-700 hover:text-blue-600">
                    Dashboard
                  </Link>
                </SignedIn>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
