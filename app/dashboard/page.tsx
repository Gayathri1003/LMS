"use client"

import { useState } from "react"
import { BookOpen, Clock, Award, TrendingUp, Play, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const enrolledCourses = [
  {
    id: "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    progress: 65,
    totalLessons: 383,
    completedLessons: 249,
    lastWatched: "Introduction to React Hooks",
    timeSpent: "45h 30m",
    image: "/placeholder.svg?height=120&width=200",
    nextLesson: "useState Hook Deep Dive",
  },
  {
    id: "2",
    title: "Machine Learning A-Z",
    instructor: "Kirill Eremenko",
    progress: 30,
    totalLessons: 320,
    completedLessons: 96,
    lastWatched: "Linear Regression Theory",
    timeSpent: "22h 15m",
    image: "/placeholder.svg?height=120&width=200",
    nextLesson: "Multiple Linear Regression",
  },
  {
    id: "3",
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    progress: 85,
    totalLessons: 487,
    completedLessons: 414,
    lastWatched: "Redux Toolkit Advanced",
    timeSpent: "67h 45m",
    image: "/placeholder.svg?height=120&width=200",
    nextLesson: "Testing React Components",
  },
]

const achievements = [
  { title: "First Course Completed", icon: "🎓", date: "2 weeks ago" },
  { title: "7-Day Streak", icon: "🔥", date: "1 week ago" },
  { title: "Fast Learner", icon: "⚡", date: "3 days ago" },
  { title: "Quiz Master", icon: "🧠", date: "Yesterday" },
]

const recommendedCourses = [
  {
    id: "4",
    title: "Advanced JavaScript Concepts",
    instructor: "Jonas Schmedtmann",
    rating: 4.8,
    price: 89.99,
    image: "/placeholder.svg?height=120&width=200",
  },
  {
    id: "5",
    title: "Node.js Masterclass",
    instructor: "Andrew Mead",
    rating: 4.7,
    price: 94.99,
    image: "/placeholder.svg?height=120&width=200",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Ready to continue your learning journey?</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="recommendations">Recommended</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Courses Enrolled</p>
                          <p className="text-2xl font-bold">3</p>
                        </div>
                        <BookOpen className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Hours Learned</p>
                          <p className="text-2xl font-bold">135</p>
                        </div>
                        <Clock className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Certificates</p>
                          <p className="text-2xl font-bold">1</p>
                        </div>
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Continue Learning */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5" />
                      Continue Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {enrolledCourses.slice(0, 2).map((course) => (
                        <div key={course.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            className="w-20 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{course.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">Last watched: {course.lastWatched}</p>
                            <div className="flex items-center gap-2">
                              <Progress value={course.progress} className="flex-1" />
                              <span className="text-sm text-muted-foreground">{course.progress}%</span>
                            </div>
                          </div>
                          <Button size="sm">Continue</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Learning Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Learning Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">This Week</span>
                        <span className="text-sm font-semibold">12h 30m</span>
                      </div>
                      <Progress value={75} />
                      <p className="text-sm text-muted-foreground">Great job! You're 25% ahead of your weekly goal.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Recent Achievements */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {achievements.slice(0, 3).map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="text-2xl">{achievement.icon}</span>
                          <div>
                            <p className="font-medium text-sm">{achievement.title}</p>
                            <p className="text-xs text-muted-foreground">{achievement.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Browse Courses
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      View Certificates
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="mt-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="font-serif text-2xl font-bold">My Courses</h2>
                <Button variant="outline" className="bg-transparent">
                  View All
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="relative">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-32 object-cover"
                      />
                      <Badge className="absolute top-2 right-2">{course.progress}% Complete</Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>
                            {course.completedLessons}/{course.totalLessons} lessons
                          </span>
                        </div>
                        <Progress value={course.progress} />
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Continue
                        </Button>
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-8">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold">Your Achievements</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-3">{achievement.icon}</div>
                      <h3 className="font-semibold mb-2">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="mt-8">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold">Recommended for You</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">{course.rating}</span>
                          <span className="text-yellow-400">★</span>
                        </div>
                        <span className="font-bold text-primary">${course.price}</span>
                      </div>

                      <Button className="w-full mt-4" size="sm">
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
