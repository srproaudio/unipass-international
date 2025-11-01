'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function Step1Page() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - will be replaced with real data from API
  const programs = [
    {
      id: '1',
      universityName: 'University of Toronto',
      programName: 'Masters in Computer Science',
      country: 'Canada',
      tuition: '$20,000',
    },
    {
      id: '2',
      universityName: 'MIT',
      programName: 'Masters in Engineering',
      country: 'USA',
      tuition: '$35,000',
    },
  ]

  const filteredPrograms = programs.filter(p =>
    p.universityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.programName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Select a Program</h2>
        <p className="text-gray-600">Search and select the program you want to apply for</p>
      </div>

      {/* Search Box */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search by university or program name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Program List */}
      <div className="space-y-3">
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-8 text-gray-600">
            No programs found. Try searching again or <Link href="/search" className="text-blue-600 hover:underline">browse all programs</Link>
          </div>
        ) : (
          filteredPrograms.map(program => (
            <div
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                selectedProgram === program.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{program.universityName}</h3>
                  <p className="text-sm text-gray-600 mt-1">{program.programName}</p>
                  <div className="flex gap-4 text-xs text-gray-500 mt-2">
                    <span>{program.country}</span>
                    <span>•</span>
                    <span>{program.tuition}/year</span>
                  </div>
                </div>
                <input
                  type="radio"
                  checked={selectedProgram === program.id}
                  onChange={() => {}}
                  className="mt-1 w-4 h-4"
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between pt-6 border-t">
        <Link href="/search">
          <Button variant="outline">Cancel</Button>
        </Link>
        <Link href="/apply/step-2">
          <Button
            disabled={!selectedProgram}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 gap-2"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
