import Image from "next/image"
import { Star, Clock, Globe, Award, PlayCircle, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Mock course data - in real app this would come from API
const courseData = {
  id: "1",
  title: "Complete Web Development Bootcamp",
  subtitle: "Learn HTML, CSS, JavaScript, Node, React, MongoDB and more!",
  instructor: {
    name: "Dr. Angela Yu",
    avatar: "/placeholder.svg?height=64&width=64",
    title: "Lead Instructor at App Brewery",
    rating: 4.7,
    students: 850000,
    courses: 12,
  },
  rating: 4.7,
  reviewCount: 234567,
  students: 850000,
  price: 84.99,
  originalPrice: 199.99,
  duration: "65 hours",
  lectures: 383,
  level: "All Levels",
  language: "English",
  lastUpdated: "12/2023",
  image: "/placeholder.svg?height=400&width=600",
  preview: "/placeholder.svg?height=400&width=600",
  description: `This course was designed for complete beginners with zero programming experience, as well as for existing programmers looking for a career change.

The course is taught by the lead instructor at the App Brewery, London's leading Programming Bootcamp.

By the end of this course, you will be fluently programming in HTML, CSS, Javascript, Node.js, React, MongoDB and more.

You'll also build a portfolio of 25+ projects that you can show off to any potential employer.`,
  whatYouWillLearn: [
    "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
    "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
    "After the course you will be able to build ANY website you want.",
    "Build fully-fledged websites and web apps for your startup or business.",
    "Work as a freelance web developer.",
    "Master frontend development with React",
    "Master backend development with Node",
    "Learn professional developer best practices.",
  ],
  curriculum: [
    {
      section: "Front-End Web Development",
      lectures: 12,
      duration: "2hr 18min",
      lessons: [
        { title: "What is Web Development?", duration: "8:12", preview: true },
        { title: "How Does the Internet Work?", duration: "12:45" },
        { title: "HTML Fundamentals", duration: "15:30" },
        { title: "CSS Basics", duration: "18:22" },
      ],
    },
    {
      section: "Introduction to Javascript ES6",
      lectures: 25,
      duration: "4hr 32min",
      lessons: [
        { title: "Introduction to Javascript", duration: "10:15" },
        { title: "Javascript Variables", duration: "8:30" },
        { title: "Javascript Data Types", duration: "12:45" },
      ],
    },
  ],
}

export default function CoursePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Course Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">
                  Bestseller
                </Badge>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">{courseData.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{courseData.subtitle}</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-semibold">{courseData.rating}</span>
                </div>
                <span className="text-gray-300">({courseData.reviewCount.toLocaleString()} ratings)</span>
                <span className="text-gray-300">{courseData.students.toLocaleString()} students</span>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{courseData.duration} total</span>
                </div>
                <div className="flex items-center gap-1">
                  <PlayCircle className="h-4 w-4" />
                  <span>{courseData.lectures} lectures</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span>{courseData.language}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4" />
                  <span>{courseData.level}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={courseData.instructor.avatar || "/placeholder.svg"} />
                  <AvatarFallback>AU</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{courseData.instructor.name}</p>
                  <p className="text-sm text-gray-300">{courseData.instructor.title}</p>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={courseData.preview || "/placeholder.svg"}
                      alt="Course preview"
                      width={400}
                      height={225}
                      className="w-full aspect-video object-cover rounded-t-lg"
                    />
                    <Button
                      size="icon"
                      className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <PlayCircle className="h-8 w-8" />
                    </Button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-3xl font-bold text-primary">${courseData.price}</span>
                      <span className="text-lg text-muted-foreground line-through">${courseData.originalPrice}</span>
                      <Badge variant="destructive">58% off</Badge>
                    </div>

                    <div className="space-y-3 mb-6">
                      <Button className="w-full" size="lg">
                        Add to Cart
                      </Button>
                      <Button variant="outline" className="w-full bg-transparent" size="lg">
                        Buy Now
                      </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground mb-4">30-Day Money-Back Guarantee</div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Full lifetime access</span>
                        <span>✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Access on mobile and TV</span>
                        <span>✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Certificate of completion</span>
                        <span>✓</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-6">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Download className="h-4 w-4 mr-2" />
                        Gift
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-8">
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-4">What you'll learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {courseData.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-4">Course Description</h2>
                    <div className="prose max-w-none">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {courseData.description}
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">Course Content</h2>
                  <div className="space-y-4">
                    {courseData.curriculum.map((section, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-lg">{section.section}</h3>
                            <span className="text-sm text-muted-foreground">
                              {section.lectures} lectures • {section.duration}
                            </span>
                          </div>
                          <div className="space-y-2">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lessonIndex}
                                className="flex justify-between items-center py-2 border-b last:border-b-0"
                              >
                                <div className="flex items-center gap-3">
                                  <PlayCircle className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-sm">{lesson.title}</span>
                                  {lesson.preview && (
                                    <Badge variant="outline" className="text-xs">
                                      Preview
                                    </Badge>
                                  )}
                                </div>
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={courseData.instructor.avatar || "/placeholder.svg"} />
                        <AvatarFallback>AU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl font-bold mb-2">{courseData.instructor.name}</h3>
                        <p className="text-muted-foreground mb-4">{courseData.instructor.title}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="text-center">
                            <div className="font-semibold">{courseData.instructor.rating}</div>
                            <div className="text-sm text-muted-foreground">Instructor Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">{courseData.instructor.students.toLocaleString()}</div>
                            <div className="text-sm text-muted-foreground">Students</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">{courseData.instructor.courses}</div>
                            <div className="text-sm text-muted-foreground">Courses</div>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold">234K</div>
                            <div className="text-sm text-muted-foreground">Reviews</div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          Dr. Angela Yu is a developer with a passion for teaching. She is the lead instructor at the
                          London App Brewery, London's leading Programming Bootcamp. She's helped hundreds of thousands
                          of students learn to code and change their lives by becoming a developer.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews" className="mt-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">Student Reviews</h2>
                  <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <Card key={review}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-semibold">John Smith</span>
                                <div className="flex">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">2 weeks ago</span>
                              </div>
                              <p className="text-muted-foreground">
                                This course is absolutely fantastic! The instructor explains everything clearly and the
                                projects are really engaging. I've learned so much and feel confident about my web
                                development skills now.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
