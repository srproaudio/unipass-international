'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Search, 
  FileText, 
  User, 
  Heart, 
  Settings, 
  BookOpen, 
  Upload,
  CheckSquare,
  Award,
  GraduationCap,
  CreditCard,
  Users,
  PenTool,
  Globe
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Search, label: 'Programs & Schools', href: '/programs' },
  { icon: FileText, label: 'My Applications', href: '/applications' },
  { icon: CheckSquare, label: 'My Tasks', href: '/tasks' },
  { icon: Award, label: 'Offers', href: '/offers' },
  { icon: Globe, label: '360 Solutions', href: '/solutions' },
  { icon: Users, label: 'Students', href: '/students' },
  { icon: CreditCard, label: 'Payments', href: '/payments' },
  { icon: PenTool, label: 'SOP Generator', href: '/sop-generator' },
  { icon: GraduationCap, label: 'TrainHub', href: '/trainhub' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Upload, label: 'Documents', href: '/documents' },
  { icon: Heart, label: 'Favorites', href: '/favorites' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Image
            src="/uni-pass-logo.png"
            alt="Uni Pass International"
            width={140}
            height={36}
            className="h-9 w-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                isActive 
                  ? 'bg-blue-50 text-blue-600 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Help Section */}
      <div className="p-4 border-t">
        <div className="bg-blue-50 rounded-lg p-4">
          <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
          <h4 className="text-sm font-semibold text-gray-900 mb-1">Need Help?</h4>
          <p className="text-xs text-gray-600 mb-3">Check our guides and tutorials</p>
          <Link href="/help" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
            View Resources →
          </Link>
        </div>
      </div>
    </aside>
  )
}
