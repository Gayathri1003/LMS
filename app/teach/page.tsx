"use client"

import type React from "react"

import { useState } from "react"
import { Users, DollarSign, Award, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const benefits = [
  {
    icon: Users,
    title: "Reach millions of students",
    description: "Connect with learners from around the world and share your expertise",
  },
  {
    icon: DollarSign,
    title: "Earn money doing what you love",
    description: "Set your own price and earn revenue from course sales",
  },
  {
    icon: Award,
    title: "Build your reputation",
    description: "Establish yourself as an expert in your field",
  },
]

const steps = [
  {
    step: 1,
    title: "Plan your course",
    description: "Choose a topic you're passionate about and plan your curriculum",
  },
  {
    step: 2,
    title: "Record your content",
    description: "Use our tools and resources to create engaging video content",
  },
  {
    step: 3,
    title: "Launch and earn",
    description: "Publish your course and start earning from day one",
  },
]

export default function TeachPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    expertise: "",
    experience: "",
    courseIdea: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle instructor application
    console.log("Instructor application:", formData)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Teach on LearnHub</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Share your knowledge with millions of students worldwide. Create courses, build your brand, and earn money
            doing what you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Teaching Today
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <Play className="h-5 w-5 mr-2" />
              Watch How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Why teach on LearnHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">How to get started</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-center mb-8">Apply to become an instructor</h2>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expertise">Area of Expertise</Label>
                    <Input
                      id="expertise"
                      placeholder="e.g., Web Development, Data Science, Marketing"
                      value={formData.expertise}
                      onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Teaching/Professional Experience</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about your background and experience"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="courseIdea">Course Idea</Label>
                    <Textarea
                      id="courseIdea"
                      placeholder="What would you like to teach? Describe your course idea"
                      value={formData.courseIdea}
                      onChange={(e) => setFormData({ ...formData, courseIdea: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
