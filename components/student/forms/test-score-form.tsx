'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, X } from 'lucide-react'

export default function TestScoreForm() {
  const [scores, setScores] = useState<Array<{
    id: string
    testType: string
    overallScore: string
    listeningScore: string
    readingScore: string
    writingScore: string
    speakingScore: string
    testDate: string
    expiryDate: string
  }>>([])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    testType: '',
    overallScore: '',
    listeningScore: '',
    readingScore: '',
    writingScore: '',
    speakingScore: '',
    testDate: '',
    expiryDate: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Submit to API
    setScores(prev => [...prev, { id: Date.now().toString(), ...formData }])
    setFormData({
      testType: '',
      overallScore: '',
      listeningScore: '',
      readingScore: '',
      writingScore: '',
      speakingScore: '',
      testDate: '',
      expiryDate: '',
    })
    setShowForm(false)
  }

  const handleDelete = (id: string) => {
    setScores(prev => prev.filter(s => s.id !== id))
  }

  const getScoreFields = (testType: string) => {
    switch (testType) {
      case 'IELTS':
      case 'TOEFL':
        return { listening: true, reading: true, writing: true, speaking: true }
      case 'GMAT':
      case 'GRE':
        return { verbal: true, quant: true, awa: true }
      default:
        return {}
    }
  }

  return (
    <div className="space-y-4">
      {scores.map(score => (
        <div key={score.id} className="border rounded-lg p-4 relative">
          <button
            onClick={() => handleDelete(score.id)}
            className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="pr-8">
            <h4 className="font-semibold text-gray-900">{score.testType}</h4>
            <p className="text-sm text-gray-600">Overall Score: {score.overallScore}</p>
            <div className="text-xs text-gray-500 mt-2 space-y-1">
              {score.listeningScore && <p>Listening: {score.listeningScore}</p>}
              {score.readingScore && <p>Reading: {score.readingScore}</p>}
              {score.writingScore && <p>Writing: {score.writingScore}</p>}
              {score.speakingScore && <p>Speaking: {score.speakingScore}</p>}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Taken: {score.testDate} • Expires: {score.expiryDate || 'N/A'}
            </p>
          </div>
        </div>
      ))}

      {showForm ? (
        <form onSubmit={handleSubmit} className="border rounded-lg p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Test Type</label>
            <select
              name="testType"
              value={formData.testType}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select test type</option>
              <option value="IELTS">IELTS</option>
              <option value="TOEFL">TOEFL</option>
              <option value="GMAT">GMAT</option>
              <option value="GRE">GRE</option>
              <option value="SAT">SAT</option>
              <option value="ACT">ACT</option>
              <option value="PTE">PTE Academic</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Overall Score</label>
            <input
              type="text"
              name="overallScore"
              value={formData.overallScore}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="e.g., 7.5, 100, 730"
            />
          </div>

          {['IELTS', 'TOEFL'].includes(formData.testType) && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Listening</label>
                <input
                  type="text"
                  name="listeningScore"
                  value={formData.listeningScore}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="7.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reading</label>
                <input
                  type="text"
                  name="readingScore"
                  value={formData.readingScore}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="7.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Writing</label>
                <input
                  type="text"
                  name="writingScore"
                  value={formData.writingScore}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="7.0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1\">Speaking</label>
                <input
                  type="text"
                  name="speakingScore"
                  value={formData.speakingScore}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="7.5"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Test Date</label>
              <input
                type="date"
                name="testDate"
                value={formData.testDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="flex gap-2 pt-4 border-t">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Add Test Score
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <Button
          type="button"
          variant="outline"
          className="w-full gap-2"
          onClick={() => setShowForm(true)}
        >
          <Plus className="h-4 w-4" />
          Add Test Score
        </Button>
      )}
    </div>
  )
}
