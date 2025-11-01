import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Shield, Bell, Lock, Globe, Trash2, LogOut } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account preferences and security settings</p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl">
          <TabsTrigger value="account" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">Privacy</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" value="user@example.com" readOnly className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50" />
                <p className="text-xs text-gray-500 mt-1">Contact Clerk to change your email</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Account Status</label>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                  <p className="text-sm text-gray-600">Your account is active and in good standing</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Account Created</label>
                <p className="text-sm text-gray-600">November 1, 2024</p>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Application Updates</h4>
                  <p className="text-sm text-gray-600">Get notified about your application status</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="border-t pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Program Recommendations</h4>
                  <p className="text-sm text-gray-600">Personalized program suggestions based on your profile</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="border-t pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Deadline Reminders</h4>
                  <p className="text-sm text-gray-600">Be reminded of upcoming application deadlines</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>

              <div className="border-t pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Weekly Newsletter</h4>
                  <p className="text-sm text-gray-600">Tips and updates about studying abroad</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>

              <div className="border-t pt-6">
                <Button className="bg-blue-600 hover:bg-blue-700">Save Preferences</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Password</h4>
                <p className="text-sm text-gray-600 mb-3">Your password is managed by Clerk authentication</p>
                <Button variant="outline">Change Password (via Clerk)</Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-3">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600 mb-3">Add an extra layer of security to your account</p>
                <Button variant="outline">Set Up 2FA</Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-3">Active Sessions</h4>
                <p className="text-sm text-gray-600 mb-3">Sign out from other devices</p>
                <div className="bg-gray-50 p-3 rounded mb-3">
                  <p className="text-sm font-medium">Current Device</p>
                  <p className="text-xs text-gray-600">Last active: Just now</p>
                </div>
                <Button variant="outline" size="sm">Sign Out Other Sessions</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Data Privacy</h4>
                <p className="text-sm text-gray-600 mb-3">Your personal information is protected in accordance with our privacy policy</p>
                <Button variant="outline" size="sm">Read Privacy Policy</Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-2">Download Your Data</h4>
                <p className="text-sm text-gray-600 mb-3">Request a copy of all your personal data</p>
                <Button variant="outline" size="sm">Download Data</Button>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-2">Delete Account</h4>
                <p className="text-sm text-gray-600 mb-3">Permanently delete your account and all associated data</p>
                <Button variant="outline" size="sm" className="text-red-600 border-red-300 hover:bg-red-50">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
