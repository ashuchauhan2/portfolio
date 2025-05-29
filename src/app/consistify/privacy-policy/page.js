import Navigation from '@/components/Navigation'
import { Shield, Lock, Eye, Users, Database, FileText, Mail, Calendar } from 'lucide-react'

function PolicySection({ icon: Icon, title, children }) {
  return (
    <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-zinc-800 rounded-lg p-3">
          <Icon className="w-6 h-6 text-zinc-400" />
        </div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-4 text-zinc-400">
        {children}
      </div>
    </div>
  )
}

function InfoCard({ title, items }) {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
      <h4 className="text-lg font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-zinc-400 flex items-start gap-2">
            <span className="text-zinc-500 mt-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                <Shield className="w-8 h-8 text-zinc-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-zinc-400 mb-4">
              Consistify Mobile Application
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Effective: May 28, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Last Updated: May 28, 2025</span>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <PolicySection icon={Eye} title="Introduction">
            <p className="text-lg leading-relaxed">
              Welcome to Consistify ("we," "our," or "us"). We are committed to protecting your privacy and being transparent about how we collect, use, and protect your information. This Privacy Policy explains our practices regarding data collection and usage in the Consistify mobile application ("App").
            </p>
          </PolicySection>

          {/* Information We Collect */}
          <PolicySection icon={Database} title="Information We Collect">
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard 
                title="Personal Data You Provide"
                items={[
                  "Sleep Schedule Data: Your target wake-up time and bedtime preferences",
                  "Activity Goals: Your weekly activity goal preferences (1-7 days per week)",
                  "Daily Tracking Data: Times when you actually wake up, go to bed, and complete activities",
                  "Activity Timestamps: Start times for completed activities (optional)",
                  "Historical Data: Past activity and sleep data for up to 30 days (editable)",
                  "Community Information: Nicknames, community passwords, names and room codes"
                ]}
              />
              <InfoCard 
                title="Automatically Collected Data"
                items={[
                  "Usage Data: How you interact with the App's features",
                  "Device Information: Basic device identifiers for Firebase authentication",
                  "App Performance Data: Error logs and crash reports for app improvement"
                ]}
              />
            </div>
            <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 mt-6">
              <h4 className="text-lg font-semibold text-red-400 mb-3">Data We DO NOT Collect</h4>
              <ul className="space-y-2 text-red-300">
                <li>• We do not collect your real name, email address, or phone number</li>
                <li>• We do not access your contacts, camera, microphone, or location</li>
                <li>• We do not collect sensitive personal information beyond habit tracking data</li>
                <li>• We do not track your activity outside of the App</li>
              </ul>
            </div>
          </PolicySection>

          {/* How We Use Your Information */}
          <PolicySection icon={FileText} title="How We Use Your Information">
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard 
                title="Primary Uses"
                items={[
                  "Habit Tracking: Store and display your sleep and activity progress",
                  "Streak Calculation: Calculate your consistency streaks",
                  "Weekly Progress: Track progress toward weekly activity goals",
                  "Daily Schedule: Display chronological timeline of activities",
                  "Historical Editing: Allow modification of past data",
                  "Analytics: Provide weekly insights and trends",
                  "Community Features: Enable competition with friends",
                  "Data Synchronization: Keep data consistent across sessions"
                ]}
              />
              <InfoCard 
                title="Secondary Uses"
                items={[
                  "App Improvement: Analyze usage patterns to improve functionality",
                  "Technical Support: Debug issues and provide customer support",
                  "Legal Compliance: Comply with applicable laws and regulations"
                ]}
              />
            </div>
          </PolicySection>

          {/* Data Storage and Security */}
          <PolicySection icon={Lock} title="Data Storage and Security">
            <div className="space-y-6">
              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h4 className="text-lg font-semibold text-white mb-4">Local Storage</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Most of your data is stored locally on your device using secure device storage</li>
                  <li>• Local data includes your preferences, goals, and daily tracking records</li>
                  <li>• You maintain full control over locally stored data</li>
                </ul>
              </div>
              
              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h4 className="text-lg font-semibold text-white mb-4">Cloud Storage (Firebase)</h4>
                <p className="text-zinc-400 mb-4">We use Google Firebase for community features and data synchronization. Cloud storage includes:</p>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Anonymous user identifiers (no personal information)</li>
                  <li>• Community membership and streak data</li>
                  <li>• Detailed daily activity logs with timestamps</li>
                  <li>• Sleep schedule data and performance metrics</li>
                  <li>• Historical data (up to 30 days for editing and analytics)</li>
                  <li>• Point calculations and consistency tracking</li>
                  <li>• Weekly and monthly summary statistics</li>
                  <li>• Daily timeline data for chronological display</li>
                </ul>
                <p className="text-zinc-400 mt-4">All data is encrypted in transit and at rest using industry-standard security measures.</p>
              </div>

              <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                <h4 className="text-lg font-semibold text-white mb-4">Data Retention</h4>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Local data remains on your device until you delete the app or clear app data</li>
                  <li>• Cloud data is retained while you remain active in communities</li>
                  <li>• Inactive community data may be automatically deleted after extended periods</li>
                  <li>• You can request data deletion at any time by contacting us</li>
                </ul>
              </div>
            </div>
          </PolicySection>

          {/* Data Sharing */}
          <PolicySection icon={Users} title="Data Sharing and Disclosure">
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard 
                title="Within Communities"
                items={[
                  "Your chosen nickname",
                  "Your wake-up and bedtime streaks",
                  "Your activity completion points",
                  "Community data is only visible to other community members"
                ]}
              />
              <InfoCard 
                title="Third Parties"
                items={[
                  "Google Firebase: Used for authentication and data storage (subject to Google's Privacy Policy)",
                  "No Other Sharing: We do not sell, rent, or share your personal data with other third parties for marketing purposes"
                ]}
              />
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Legal Requirements</h4>
              <p className="text-zinc-400">
                We may disclose your information if required by law, regulation, or legal process, or to protect our rights, safety, or the rights and safety of others.
              </p>
            </div>
          </PolicySection>

          {/* Your Rights */}
          <PolicySection icon={Shield} title="Your Rights and Choices">
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard 
                title="Data Access and Control"
                items={[
                  "View Your Data: Access all tracking data within the App",
                  "Modify Data: Edit goals, preferences, and tracking records",
                  "Historical Editing: Modify activity and sleep data for past 30 days",
                  "Timeline View: Access chronological view of daily activities",
                  "Analytics Access: View detailed weekly analytics",
                  "Delete Data: Clear local data by uninstalling the App",
                  "Export Data: Contact us for data export requests"
                ]}
              />
              <InfoCard 
                title="Community Control"
                items={[
                  "Leave Communities: Exit any community at any time",
                  "Delete Communities: Creators can delete communities they created",
                  "Privacy Settings: All communities are private and password-protected"
                ]}
              />
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Opt-Out Options</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>• <strong>Community Features:</strong> You can use the App without joining any communities</li>
                <li>• <strong>Data Collection:</strong> Core habit tracking requires some data collection, but you can minimize it by not using community features</li>
              </ul>
            </div>
          </PolicySection>

          {/* Additional Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-4">Children's Privacy</h3>
              <p className="text-zinc-400">
                Consistify is not intended for users under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-4">International Data Transfers</h3>
              <p className="text-zinc-400">
                Your data may be transferred to and processed in countries other than your own, including the United States where our cloud services are hosted. We ensure appropriate safeguards are in place to protect your data during such transfers.
              </p>
            </div>
          </div>

          {/* Technical Implementation */}
          <PolicySection icon={Lock} title="Technical Implementation">
            <div className="grid md:grid-cols-2 gap-6">
              <InfoCard 
                title="Anonymous Authentication"
                items={[
                  "Firebase Anonymous Authentication provides cloud features without requiring personal information",
                  "Anonymous IDs are randomly generated and cannot be linked to your real identity",
                  "You can use the App completely offline if you prefer not to use cloud features"
                ]}
              />
              <InfoCard 
                title="Data Minimization"
                items={[
                  "We collect only the minimum data necessary for app functionality",
                  "No tracking beyond habit-related activities",
                  "No advertising or marketing data collection",
                  "No behavioral profiling outside of habit tracking"
                ]}
              />
            </div>
          </PolicySection>

          {/* Changes to Policy */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-xl font-bold text-white mb-4">Changes to This Privacy Policy</h3>
            <p className="text-zinc-400 mb-4">
              We may update this Privacy Policy from time to time. When we make changes, we will:
            </p>
            <ul className="space-y-2 text-zinc-400 mb-4">
              <li>• Update the "Last Updated" date at the top of this policy</li>
              <li>• Notify you through the App or other appropriate means</li>
              <li>• For material changes, we may require your consent to continue using the App</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-zinc-800 rounded-lg p-3">
                <Mail className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Contact Us</h3>
            </div>
            <p className="text-zinc-400 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 inline-block">
              <p className="text-white font-semibold">Email: consistify@ashuchauhan.com</p>
              <p className="text-zinc-400">Subject Line: Consistify Privacy Policy Inquiry</p>
            </div>
          </div>

          {/* Compliance Notice */}
          <div className="bg-green-900/20 border border-green-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-green-400 mb-4">Google Play Store Compliance</h3>
            <p className="text-green-300">
              This privacy policy complies with Google Play Store requirements and covers all data collection and usage practices, user rights and control mechanisms, security measures and data protection, third-party integrations and data sharing, and legal basis for data processing.
            </p>
          </div>

          {/* Agreement Notice */}
          <div className="bg-zinc-800 border-2 border-zinc-600 rounded-lg p-8 text-center mt-8">
            <p className="text-white font-semibold text-lg">
              By using Consistify, you acknowledge that you have read and understood this Privacy Policy and agree to our data practices as described herein.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
