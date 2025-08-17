import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using LearnHub, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of LearnHub's materials for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">3. Course Content and Intellectual Property</h2>
              <p className="mb-4">
                All course content, including but not limited to videos, text, images, and other materials, are the
                intellectual property of their respective instructors and LearnHub. Students may access course content
                for personal learning purposes only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">4. User Accounts</h2>
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. You are responsible for safeguarding the password and for all activities that occur under
                your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">5. Payment and Refunds</h2>
              <p className="mb-4">
                Course purchases are processed securely through our payment partners. We offer a 30-day money-back
                guarantee for most courses, subject to our refund policy terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">6. Prohibited Uses</h2>
              <p className="mb-4">You may not use our service:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">7. Disclaimer</h2>
              <p className="mb-4">
                The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law,
                this Company excludes all representations, warranties, conditions and terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
              <p className="mb-2">Email: legal@learnhub.com</p>
              <p className="mb-2">Address: 123 Learning Street, Education City, EC 12345</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
