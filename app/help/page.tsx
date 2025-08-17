"use client"

import { useState } from "react"
import { Search, ChevronDown, ChevronRight, MessageCircle, Mail, Phone } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I create an account?",
        answer:
          "Click the 'Sign Up' button in the top right corner and fill out the registration form with your details.",
      },
      {
        question: "How do I enroll in a course?",
        answer:
          "Browse our course catalog, click on a course you're interested in, and click 'Enroll Now' or 'Add to Cart'.",
      },
      {
        question: "Can I access courses on mobile devices?",
        answer: "Yes! Our platform is fully responsive and works on all devices including smartphones and tablets.",
      },
    ],
  },
  {
    title: "Payments & Billing",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers in supported regions.",
      },
      {
        question: "Can I get a refund?",
        answer: "Yes, we offer a 30-day money-back guarantee for most courses. Contact support for refund requests.",
      },
      {
        question: "Do you offer student discounts?",
        answer:
          "Yes, we offer special pricing for students with valid student IDs. Contact support for more information.",
      },
    ],
  },
  {
    title: "Course Access",
    faqs: [
      {
        question: "How long do I have access to a course?",
        answer: "Once you enroll in a course, you have lifetime access to the course materials.",
      },
      {
        question: "Can I download course videos?",
        answer: "Course videos can be downloaded for offline viewing through our mobile app.",
      },
      {
        question: "What if I'm not satisfied with a course?",
        answer: "We offer a 30-day money-back guarantee. You can request a refund within 30 days of purchase.",
      },
    ],
  },
  {
    title: "Technical Issues",
    faqs: [
      {
        question: "Videos won't play, what should I do?",
        answer:
          "Try refreshing the page, clearing your browser cache, or switching to a different browser. Contact support if issues persist.",
      },
      {
        question: "I forgot my password, how do I reset it?",
        answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email.",
      },
      {
        question: "The website is loading slowly, what can I do?",
        answer: "Check your internet connection, try a different browser, or contact support if the issue continues.",
      },
    ],
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (item: string) => {
    setOpenItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold mb-4">Help Center</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions or get in touch with our support team
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-8 mb-12">
            {filteredFAQs.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const itemKey = `${categoryIndex}-${faqIndex}`
                      const isOpen = openItems.includes(itemKey)

                      return (
                        <Collapsible key={faqIndex}>
                          <CollapsibleTrigger
                            className="flex items-center justify-between w-full p-4 text-left bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                            onClick={() => toggleItem(itemKey)}
                          >
                            <span className="font-medium">{faq.question}</span>
                            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                          </CollapsibleTrigger>
                          <CollapsibleContent className="px-4 py-3 text-muted-foreground">
                            {faq.answer}
                          </CollapsibleContent>
                        </Collapsible>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Support */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-center">Still need help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-3">
                  <MessageCircle className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-sm text-muted-foreground">Chat with our support team</p>
                  <Button variant="outline" className="bg-transparent">
                    Start Chat
                  </Button>
                </div>

                <div className="space-y-3">
                  <Mail className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-sm text-muted-foreground">Get help via email</p>
                  <Button variant="outline" className="bg-transparent">
                    Send Email
                  </Button>
                </div>

                <div className="space-y-3">
                  <Phone className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Phone Support</h3>
                  <p className="text-sm text-muted-foreground">Call us directly</p>
                  <Button variant="outline" className="bg-transparent">
                    Call Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
