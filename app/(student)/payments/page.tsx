import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  CreditCard,
  DollarSign,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Receipt,
  Shield,
  Banknote,
  Wallet,
  ExternalLink
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payments | Uni Pass International',
  description: 'Manage your application fees and payments'
}

const payments = [
  {
    id: 1,
    type: 'Application Fee',
    university: 'University of Toronto',
    program: 'Master of Science in Computer Science',
    amount: 'CAD $150',
    status: 'paid',
    dueDate: '2024-10-15',
    paidDate: '2024-10-10',
    paymentMethod: 'Credit Card',
    transactionId: 'TXN-2024-001456',
    invoiceNumber: 'INV-UOT-2024-789'
  },
  {
    id: 2,
    type: 'Tuition Deposit',
    university: 'University of British Columbia',
    program: 'MBA - Master of Business Administration',
    amount: 'CAD $5,000',
    status: 'pending',
    dueDate: '2024-11-30',
    paidDate: null,
    paymentMethod: null,
    transactionId: null,
    invoiceNumber: 'INV-UBC-2024-456'
  },
  {
    id: 3,
    type: 'Application Fee',
    university: 'Western University',
    program: 'Master of Science in Data Science',
    amount: 'CAD $120',
    status: 'paid',
    dueDate: '2024-10-20',
    paidDate: '2024-10-18',
    paymentMethod: 'Debit Card',
    transactionId: 'TXN-2024-001789',
    invoiceNumber: 'INV-WU-2024-123'
  },
  {
    id: 4,
    type: 'Document Processing',
    university: 'ApplyBoard Services',
    program: 'Document Verification & Processing',
    amount: 'CAD $75',
    status: 'overdue',
    dueDate: '2024-10-25',
    paidDate: null,
    paymentMethod: null,
    transactionId: null,
    invoiceNumber: 'INV-AB-2024-567'
  },
  {
    id: 5,
    type: 'Language Test Voucher',
    university: 'IELTS Official Test Center',
    program: 'IELTS Academic Test',
    amount: 'CAD $319',
    status: 'processing',
    dueDate: '2024-11-05',
    paidDate: '2024-10-28',
    paymentMethod: 'Credit Card',
    transactionId: 'TXN-2024-001890',
    invoiceNumber: 'INV-IELTS-2024-890'
  }
]

const paymentMethods = [
  {
    type: 'Credit Card',
    lastFour: '4532',
    brand: 'Visa',
    isDefault: true
  },
  {
    type: 'Debit Card',
    lastFour: '8901',
    brand: 'Mastercard',
    isDefault: false
  },
  {
    type: 'Bank Transfer',
    lastFour: '1234',
    brand: 'TD Bank',
    isDefault: false
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'paid': return CheckCircle
    case 'pending': return Clock
    case 'processing': return Clock
    case 'overdue': return AlertCircle
    default: return Clock
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'paid': return 'bg-green-100 text-green-800'
    case 'pending': return 'bg-blue-100 text-blue-800'
    case 'processing': return 'bg-yellow-100 text-yellow-800'
    case 'overdue': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function PaymentsPage() {
  const totalPaid = payments
    .filter(p => p.status === 'paid')
    .reduce((sum, p) => sum + parseFloat(p.amount.replace(/[^\d.-]/g, '')), 0)
  
  const totalPending = payments
    .filter(p => p.status === 'pending' || p.status === 'overdue')
    .reduce((sum, p) => sum + parseFloat(p.amount.replace(/[^\d.-]/g, '')), 0)

  const overduePayments = payments.filter(p => p.status === 'overdue').length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
              <p className="text-gray-600 mt-2">Manage your application fees, deposits, and service payments</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export History
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <CreditCard className="w-4 h-4 mr-2" />
                Add Payment Method
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600">CAD ${totalPaid.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total Paid</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-blue-600">CAD ${totalPending.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Pending Payments</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-red-600">{overduePayments}</div>
              <div className="text-sm text-gray-600">Overdue Items</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Receipt className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-purple-600">{payments.length}</div>
              <div className="text-sm text-gray-600">Total Transactions</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment History */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Payment History</h2>
              <Button variant="outline" size="sm">
                Filter
              </Button>
            </div>

            <div className="space-y-4">
              {payments.map((payment) => {
                const StatusIcon = getStatusIcon(payment.status)
                const isOverdue = payment.status === 'overdue'
                const isPaid = payment.status === 'paid'
                
                return (
                  <Card key={payment.id} className={`transition-shadow hover:shadow-md ${isOverdue ? 'border-red-200' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          <StatusIcon className={`w-5 h-5 mt-1 ${
                            payment.status === 'paid' ? 'text-green-600' :
                            payment.status === 'overdue' ? 'text-red-600' :
                            payment.status === 'processing' ? 'text-yellow-600' : 'text-blue-600'
                          }`} />
                          <div>
                            <h3 className="font-semibold text-gray-900">{payment.type}</h3>
                            <p className="text-gray-700">{payment.university}</p>
                            <p className="text-sm text-gray-600">{payment.program}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">{payment.amount}</div>
                          <Badge className={getStatusColor(payment.status)}>
                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Due Date:</div>
                          <div className={isOverdue ? 'text-red-600 font-medium' : 'text-gray-700'}>
                            {new Date(payment.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                        {payment.paidDate && (
                          <div>
                            <div className="text-gray-500">Paid Date:</div>
                            <div className="text-gray-700">{new Date(payment.paidDate).toLocaleDateString()}</div>
                          </div>
                        )}
                        {payment.paymentMethod && (
                          <div>
                            <div className="text-gray-500">Payment Method:</div>
                            <div className="text-gray-700">{payment.paymentMethod}</div>
                          </div>
                        )}
                        <div>
                          <div className="text-gray-500">Invoice #:</div>
                          <div className="text-gray-700">{payment.invoiceNumber}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t">
                        <div className="flex space-x-2">
                          {isPaid && (
                            <>
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-2" />
                                Receipt
                              </Button>
                              <Button variant="outline" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Details
                              </Button>
                            </>
                          )}
                        </div>
                        {(payment.status === 'pending' || payment.status === 'overdue') && (
                          <Button className={payment.status === 'overdue' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}>
                            Pay Now
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Payment Methods</h2>
              <Button variant="outline" size="sm">
                Add New
              </Button>
            </div>

            <div className="space-y-3">
              {paymentMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {method.brand} •••• {method.lastFour}
                          </div>
                          <div className="text-sm text-gray-600">{method.type}</div>
                        </div>
                      </div>
                      {method.isDefault && (
                        <Badge variant="secondary" className="text-xs">
                          Default
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Security Notice */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Secure Payments</h4>
                    <p className="text-sm text-blue-700">
                      All payments are processed securely using industry-standard encryption. 
                      Your payment information is never stored on our servers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Wallet className="w-4 h-4 mr-2" />
                  Set up Auto-pay
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Banknote className="w-4 h-4 mr-2" />
                  Payment Plans
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Receipt className="w-4 h-4 mr-2" />
                  Tax Documents
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Payment Help CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 mt-12 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need Payment Help?</h2>
            <p className="text-blue-100 mb-6">
              Our financial services team is here to help with payment plans, financial aid guidance, 
              and student loan options to make your education affordable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Financial Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}