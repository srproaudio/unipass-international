'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft, Plus, X } from 'lucide-react'
import Link from 'next/link'

export default function Step3Page() {
  const [educations, setEducations] = useState<any[]>([])
  const [testScores, setTestScores] = useState<any[]>([])
  const [showEducationForm, setShowEducationForm] = useState(false)
  const [showTestForm, setShowTestForm] = useState(false)

  const addEducation = (data: any) => {
    setEducations([...educations, data])
    setShowEducationForm(false)
  }

  const addTestScore = (data: any) => {
    setTestScores([...testScores, data])
    setShowTestForm(false)
  }

  const isComplete = educations.length > 0 && testScores.length > 0

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Qualifications</h2>
        <p className="text-gray-600">Add your education and test scores</p>
      </div>

      {/* Education Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Education History</h3>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowEducationForm(true)}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Education
          </Button>
        </div>

        {educations.length === 0 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-600">No education added yet</p>
          </div>
        ) : (
          <div className="space-y-2">
            {educations.map((edu, idx) => (
              <div key={idx} className="border rounded-lg p-3 flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-900">{edu.institution}</p>
                  <p className="text-sm text-gray-600">{edu.degree} in {edu.field}</p>
                </div>
                <button
                  onClick={() => setEducations(educations.filter((_, i) => i !== idx))}
                  className="text-gray-400 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {showEducationForm && (
          <div className="border rounded-lg p-4 mt-3 space-y-3">
            <input type="text" placeholder="Institution" className="w-full px-3 py-2 border rounded" />
            <input type="text" placeholder="Degree" className="w-full px-3 py-2 border rounded" />
            <input type="text" placeholder="Field of Study" className="w-full px-3 py-2 border rounded" />
            <div className="flex gap-2">
              <Button size="sm" onClick={() => addEducation({ institution: 'University', degree: 'Masters', field: 'CS' })}>
                Add
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowEducationForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Test Scores Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Test Scores</h3>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowTestForm(true)}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Test Score
          </Button>
        </div>

        {testScores.length === 0 ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-600">No test scores added yet</p>
          </div>
        ) : (
          <div className="space-y-2">
            {testScores.map((score, idx) => (
              <div key={idx} className="border rounded-lg p-3 flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-900">{score.testType}</p>
                  <p className="text-sm text-gray-600">Score: {score.score}</p>
                </div>
                <button
                  onClick={() => setTestScores(testScores.filter((_, i) => i !== idx))}
                  className="text-gray-400 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {showTestForm && (
          <div className="border rounded-lg p-4 mt-3 space-y-3">
            <select className="w-full px-3 py-2 border rounded">
              <option>Select Test Type</option>
              <option>IELTS</option>
              <option>TOEFL</option>
              <option>GRE</option>
              <option>GMAT</option>
            </select>
            <input type="text" placeholder="Overall Score" className="w-full px-3 py-2 border rounded" />
            <div className="flex gap-2">
              <Button size="sm" onClick={() => addTestScore({ testType: 'IELTS', score: '7.5' })}>
                Add
              </Button>
              <Button size="sm" variant="outline" onClick={() => setShowTestForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-between pt-6 border-t">
        <Link href="/apply/step-2">
          <Button variant="outline" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <Link href="/apply/step-4">
          <Button
            disabled={!isComplete}
            className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 gap-2"
          >
            Continue <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
