import { Card, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const steps = [
    { number: 1, title: 'Program Selection', href: '/apply/step-1' },
    { number: 2, title: 'Personal Info', href: '/apply/step-2' },
    { number: 3, title: 'Qualifications', href: '/apply/step-3' },
    { number: 4, title: 'Documents', href: '/apply/step-4' },
    { number: 5, title: 'Review & Submit', href: '/apply/step-5' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-6xl mx-auto px-4">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="relative flex-1">
                  {/* Step Circle */}
                  <div className="relative z-10 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold mx-auto">
                      {step.number}
                    </div>
                  </div>
                  {/* Step Label */}
                  <div className="text-center">
                    <p className="text-sm font-medium text-gray-900">{step.title}</p>
                  </div>
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-5 left-1/2 h-1 w-full bg-gray-300 -z-10"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <Card>
          <CardContent className="p-6">
            {children}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
