import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Upload, X, Download, MoreVertical } from 'lucide-react'

export default function DocumentsPage() {
  const documents = [] // Will be populated from DB

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Documents</h1>
          <p className="text-gray-600 mt-1">Upload and manage all your academic and personal documents</p>
        </div>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2">
          <Upload className="h-5 w-5" />
          Upload Document
        </Button>
      </div>

      {/* Document Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <CategoryCard title="Passport" count={0} icon="📄" />
        <CategoryCard title="Transcripts" count={0} icon="📋" />
        <CategoryCard title="Certificates" count={0} icon="🏆" />
        <CategoryCard title="Test Scores" count={0} icon="📊" />
      </div>

      {/* Upload Area */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:bg-gray-50 transition">
            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Upload documents</h3>
            <p className="text-gray-600 mb-4">Drag and drop your files here or click to browse</p>
            <Button variant="outline" className="gap-2">
              <Upload className="h-4 w-4" />
              Select Files
            </Button>
            <p className="text-xs text-gray-500 mt-3">Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)</p>
          </div>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle>All Documents ({documents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {documents.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No documents uploaded</h3>
              <p className="text-gray-600">Start uploading your documents to support your applications</p>
            </div>
          ) : (
            <div className="space-y-2">
              {/* Document rows will be rendered here */}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Document Requirements Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Common Required Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">•</span>
              <span><strong>Passport:</strong> Copy of your valid passport</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">•</span>
              <span><strong>Academic Transcripts:</strong> Certified copies of your academic records</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">•</span>
              <span><strong>Test Scores:</strong> IELTS, TOEFL, GMAT, GRE, or other standardized tests</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">•</span>
              <span><strong>Degree Certificate:</strong> Graduation certificate or diploma</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">•</span>
              <span><strong>Work Experience:</strong> Resume or CV highlighting your experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-semibold min-w-fit">•</span>
              <span><strong>Recommendation Letters:</strong> Usually 2-3 letters from professors or employers</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function CategoryCard({ title, count, icon }: { title: string; count: number; icon: string }) {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="text-3xl mb-2">{icon}</div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">{count}</p>
          <p className="text-xs text-gray-500 mt-1">{count === 1 ? 'document' : 'documents'}</p>
        </div>
      </CardContent>
    </Card>
  )
}
