import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you create an account, enroll in
                courses, or contact us for support. This may include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Course progress and completion data</li>
                <li>Communications with us</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Communicate with you about courses, features, and promotional offers</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">3. Information Sharing</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>With instructors when you enroll in their courses</li>
                <li>With service providers who assist us in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our platform. You can
                control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and update your personal information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p className="mb-4">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mb-2">Email: privacy@learnhub.com</p>
              <p className="mb-2">Address: 123 Learning Street, Education City, EC 12345</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
