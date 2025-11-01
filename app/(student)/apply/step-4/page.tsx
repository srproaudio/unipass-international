'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight, ChevronLeft, Upload, X, FileText } from 'lucide-react'
import Link from 'next/link'

export default function Step4Page() {
  const [documents, setDocuments] = useState<any[]>([])
  const [dragActive, setDragActive] = useState(false)

  const requiredDocuments = [
    { id: 'passport', label: 'Passport Copy', required: true },
    { id: 'transcript', label: 'Academic Transcripts', required: true },
    { id: 'diploma', label: 'Degree Certificate', required: true },
    { id: 'testScore', label: 'Test Score Report', required: true },
    { id: 'cv', label: 'CV/Resume', required: false },
    { id: 'recommendation', label: 'Recommendation Letters', required: false },
  ]

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      const newDoc = {
        id: Date.now().toString(),
        name: e.dataTransfer.files[0].name,
        type: 'passport',
        size: e.dataTransfer.files[0].size,
      }
      setDocuments([...documents, newDoc])
    }
  }

  const isComplete = requiredDocuments.filter(d => d.required).every(rd =>
    documents.some(d => d.type === rd.id)
  )

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 4: Upload Documents</h2>
        <p className="text-gray-600">Upload supporting documents for your application</p>
      </div>

      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <Upload className="h-12 w-12 mx-auto text-gray-400 mb-3" />
        <h3 className="font-semibold text-gray-900 mb-2">Drag and drop your files here</h3>
        <p className="text-gray-600 mb-4">or</p>
        <Button variant="outline">
          <Upload className="mr-2 h-4 w-4" />
          Select Files
        </Button>
        <p className="text-xs text-gray-500 mt-3">Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)</p>
      </div>

      {/* Required Documents */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
        <div className="space-y-3">
          {requiredDocuments.map(doc => {
            const uploaded = documents.some(d => d.type === doc.id)
            return (
              <div key={doc.id} className="border rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{doc.label}</p>
                    {uploaded && (
                      <p className="text-xs text-green-600">✓ Uploaded</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {doc.required && (
                    <span className="text-xs text-red-600 font-semibold">Required</span>
                  )}
                  {uploaded ? (
                    <button
                      onClick={() => setDocuments(documents.filter(d => d.type !== doc.id))}
                      className="text-gray-400 hover:text-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  ) : (
                    <Button size="sm" variant="outline">
                      Upload
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Uploaded Files */}
      {documents.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Uploaded Files ({documents.length})</h3>
          <div className="space-y-2">
            {documents.map(doc => (
              <div key={doc.id} className="border rounded-lg p-3 flex items-center justify-between bg-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-500">{(doc.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <button
                  onClick={() => setDocuments(documents.filter(d => d.id !== doc.id))}
                  className="text-gray-400 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between pt-6 border-t">
        <Link href="/apply/step-3">
          <Button variant="outline" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <Link href="/apply/step-5">
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
