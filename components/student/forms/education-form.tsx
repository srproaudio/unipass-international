'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, X } from 'lucide-react'

export default function EducationForm() {
  const [educations, setEducations] = useState<Array<{
    id: string
    institutionName: string
    country: string
    degreeType: string
    fieldOfStudy: string
    startDate: string
    endDate: string
    gpa: string
    completed: boolean
  }>>([])

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    institutionName: '',
    country: '',
    degreeType: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    gpa: '',
    completed: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Submit to API
    setEducations(prev => [...prev, { id: Date.now().toString(), ...formData }])
    setFormData({
      institutionName: '',
      country: '',
      degreeType: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      gpa: '',
      completed: false,
    })
    setShowForm(false)
  }

  const handleDelete = (id: string) => {
    setEducations(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div className="space-y-4">
      {educations.map(education => (
        <div key={education.id} className="border rounded-lg p-4 relative">
          <button
            onClick={() => handleDelete(education.id)}
            className="absolute top-2 right-2 text-gray-400 hover:text-red-600"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="pr-8">
            <h4 className="font-semibold text-gray-900">{education.institutionName}</h4>
            <p className="text-sm text-gray-600">{education.degreeType} in {education.fieldOfStudy}</p>
            <p className="text-sm text-gray-500 mt-1">{education.country}</p>
            <p className="text-xs text-gray-500 mt-2">
              {education.startDate} - {education.endDate || 'Present'} • GPA: {education.gpa}
            </p>
            {education.completed && (
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded mt-2 inline-block">
                Completed
              </span>
            )}
          </div>
        </div>
      ))}

      {showForm ? (
        <form onSubmit={handleSubmit} className="border rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
              <input
                type="text"
                name="institutionName"
                value={formData.institutionName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="University of Toronto"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Canada"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree Type</label>
              <select
                name="degreeType"
                value={formData.degreeType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select degree type</option>
                <option value="Bachelor">Bachelor's</option>
                <option value="Master">Master's</option>
                <option value="PhD">PhD</option>
                <option value="Diploma">Diploma</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Computer Science"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="month"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="month"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
              <input
                type="text"
                name="gpa"
                value={formData.gpa}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="3.8/4.0"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="completed"
              id="completed"
              checked={formData.completed}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="completed" className="text-sm text-gray-700">
              I have completed this education
            </label>
          </div>

          <div className="flex gap-2 pt-4 border-t">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Add Education
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
          Add Education
        </Button>
      )}
    </div>
  )
}
