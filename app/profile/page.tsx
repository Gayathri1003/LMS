"use client"

import { useState } from "react"
import { Camera, Edit, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const userProfile = {
  name: "John Smith",
  email: "john.smith@example.com",
  avatar: "/placeholder.svg?height=120&width=120",
  title: "Full Stack Developer",
  bio: "Passionate developer with 5 years of experience in web technologies. Always eager to learn new skills and technologies.",
  location: "San Francisco, CA",
  website: "https://johnsmith.dev",
  joinDate: "January 2023",
  coursesCompleted: 12,
  certificatesEarned: 8,
  totalHours: 245,
}

const completedCourses = [
  {
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    completedDate: "March 2024",
    certificate: true,
  },
  {
    title: "React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    completedDate: "February 2024",
    certificate: true,
  },
  {
    title: "Node.js Masterclass",
    instructor: "Andrew Mead",
    completedDate: "January 2024",
    certificate: false,
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: userProfile.name,
    title: userProfile.title,
    bio: userProfile.bio,
    location: userProfile.location,
    website: userProfile.website,
  })

  const handleSave = () => {
    // Save profile changes
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData({
      name: userProfile.name,
      title: userProfile.title,
      bio: userProfile.bio,
      location: userProfile.location,
      website: userProfile.website,
    })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="courses">Completed Courses</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="relative inline-block mb-4">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src={userProfile.avatar || "/placeholder.svg"} />
                          <AvatarFallback>JS</AvatarFallback>
                        </Avatar>
                        <Button
                          size="icon"
                          variant="outline"
                          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-background"
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      </div>

                      <h2 className="font-serif text-xl font-bold mb-1">{userProfile.name}</h2>
                      <p className="text-muted-foreground mb-4">{userProfile.title}</p>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="font-bold text-lg">{userProfile.coursesCompleted}</div>
                          <div className="text-xs text-muted-foreground">Courses</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg">{userProfile.certificatesEarned}</div>
                          <div className="text-xs text-muted-foreground">Certificates</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-lg">{userProfile.totalHours}</div>
                          <div className="text-xs text-muted-foreground">Hours</div>
                        </div>
                      </div>

                      <Badge variant="secondary" className="mb-4">
                        Member since {userProfile.joinDate}
                      </Badge>

                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Profile Details */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Profile Information</CardTitle>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button size="sm" onClick={handleSave}>
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button size="sm" variant="outline" onClick={handleCancel} className="bg-transparent">
                            <X className="h-4 w-4 mr-2" />
                            Cancel
                          </Button>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          {isEditing ? (
                            <Input
                              id="name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          ) : (
                            <p className="text-sm p-2 bg-muted rounded">{userProfile.name}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <p className="text-sm p-2 bg-muted rounded">{userProfile.email}</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="title">Professional Title</Label>
                          {isEditing ? (
                            <Input
                              id="title"
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            />
                          ) : (
                            <p className="text-sm p-2 bg-muted rounded">{userProfile.title}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          {isEditing ? (
                            <Input
                              id="location"
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            />
                          ) : (
                            <p className="text-sm p-2 bg-muted rounded">{userProfile.location}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        {isEditing ? (
                          <Input
                            id="website"
                            value={formData.website}
                            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          />
                        ) : (
                          <p className="text-sm p-2 bg-muted rounded">{userProfile.website}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        {isEditing ? (
                          <Textarea
                            id="bio"
                            rows={4}
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                          />
                        ) : (
                          <p className="text-sm p-3 bg-muted rounded leading-relaxed">{userProfile.bio}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="courses" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {completedCourses.map((course, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                          <p className="text-xs text-muted-foreground mt-1">Completed: {course.completedDate}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {course.certificate && <Badge variant="secondary">Certificate Earned</Badge>}
                          <Button variant="outline" size="sm" className="bg-transparent">
                            View Certificate
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button>Update Password</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <Select defaultValue="weekly">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course-reminders">Course Reminders</Label>
                      <Select defaultValue="enabled">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enabled">Enabled</SelectItem>
                          <SelectItem value="disabled">Disabled</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button>Save Preferences</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <Button variant="destructive">Delete Account</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  )
}
