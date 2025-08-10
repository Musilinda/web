export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-4">Musilinda Privacy Policy</h1>
          <p className="text-gray-600 italic mb-8">Last updated: January 10, 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Musilinda is designed to protect your privacy. We collect minimal information necessary to provide our music learning services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                <strong>Audio Data</strong>: We temporarily process audio from your microphone to provide real-time pitch feedback. This audio is processed locally on your device and is not stored or transmitted to our servers.
              </li>
              <li>
                <strong>Progress Data</strong>: We store your lesson progress and exercise results locally to track your musical development.
              </li>
              <li>
                <strong>Usage Analytics</strong>: We collect anonymous usage statistics to improve the app experience.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Provide real-time pitch detection and musical interval training</li>
              <li>Track your learning progress and provide personalized feedback</li>
              <li>Improve our educational content and app functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Data Security</h2>
            <p className="text-gray-700">
              Your privacy is important to us. Audio data is processed locally on your device and is never transmitted or stored on external servers. All other data is stored securely and is not shared with third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Microphone Permission</h2>
            <p className="text-gray-700">
              Musilinda requests microphone access solely for music education purposes. The app analyzes your vocal pitch in real-time to provide feedback on musical intervals. No audio recordings are saved or transmitted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our app is suitable for all ages. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this privacy policy, please contact us at privacy@musilinda.app
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-purple-600 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify users of any material changes by posting the new policy on this page.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}