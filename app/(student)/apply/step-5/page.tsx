'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function Step5Page() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="space-y-6 text-center py-12">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
          <p className="text-gray-600 mb-4">Your application has been successfully submitted to the university.</p>
          <p className="text-sm text-gray-500 mb-6">
            You'll receive a confirmation email shortly. Track your application status in your dashboard.
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <Link href="/applications">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Applications
            </Button>
          </Link>
          <Link href="/search">
            <Button variant="outline">
              Apply to Another Program
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 5: Review & Submit</h2>
        <p className="text-gray-600">Review your application before submitting</p>
      </div>

      {/* Application Summary */}
      <Card>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Summary</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">Program</p>
                <p className="font-semibold text-gray-900">Masters in Computer Science</p>
                <p className="text-sm text-gray-600">University of Toronto, Canada</p>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">Intake</p>
                <p className="font-semibold text-gray-900">Fall 2025</p>
              </div>

              <div className="border-b pb-4">
                <p className="text-sm text-gray-600 mb-1">Application Fee</p>
                <p className="font-semibold text-gray-900">$100 CAD</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-1">Submitted Documents</p>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Passport Copy
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Academic Transcripts
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Degree Certificate
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Test Score Report
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Notes */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="p-6">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-900 mb-1">Please Note</h4>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Once submitted, your application cannot be modified</li>
                <li>• The university will review your application and contact you via email</li>
                <li>• Processing typically takes 4-8 weeks</li>
                <li>• Keep your application reference number for future correspondence</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms & Conditions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-3">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="w-4 h-4 mt-1 flex-shrink-0"
            />
            <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
              I confirm that all information provided is accurate and truthful. I understand that submitting false information may result in rejection or legal consequences. I agree to the terms and conditions.
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex justify-between pt-6 border-t">
        <Link href="/apply/step-4">
          <Button variant="outline" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
        <Button
          disabled={!agreedToTerms || isSubmitting}
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 disabled:opacity-50 gap-2"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </Button>
      </div>
    </div>
  )
}
