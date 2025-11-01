import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Filter, Trash2, Plus, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function FavoritesPage() {
  const favorites = [] // Will be populated from DB

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Saved Programs</h1>
          <p className="text-gray-600 mt-1">Your favorite programs and universities ({favorites.length})</p>
        </div>
        <Link href="/search">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
            <Plus className="h-5 w-5" />
            Explore More
          </Button>
        </Link>
      </div>

      {/* Filter Bar */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <Filter className="h-4 w-4" />
              Filter Programs
            </Button>
            <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>All Countries</option>
              <option>Canada</option>
              <option>USA</option>
              <option>UK</option>
              <option>Australia</option>
            </select>
            <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>All Levels</option>
              <option>Bachelors</option>
              <option>Masters</option>
              <option>PhD</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Favorites Grid */}
      {favorites.length === 0 ? (
        <Card>
          <CardContent className="p-12 text-center">
            <Heart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No saved programs yet</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start exploring programs and save your favorites for quick access
            </p>
            <Link href="/search">
              <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                <GraduationCap className="h-4 w-4" />
                Browse Programs
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Favorite program cards will be rendered here */}
        </div>
      )}

      {/* Info Card */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tips for Saving Programs</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">✓</span>
              <span>Save programs you're interested in for easy comparison</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">✓</span>
              <span>Create multiple lists to organize programs by country, level, or interest</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">✓</span>
              <span>Use filters to narrow down your search based on your preferences</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">✓</span>
              <span>Start applications from your saved programs</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
