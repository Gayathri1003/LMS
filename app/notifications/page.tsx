"use client"

import { useState } from "react"
import { Bell, Check, Trash2, BookOpen, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock notifications data
const mockNotifications = [
  {
    id: "1",
    type: "course_update",
    title: "New lesson added to React Masterclass",
    message: "Chapter 12: Advanced Hooks has been added to your enrolled course.",
    time: "2 hours ago",
    read: false,
    icon: BookOpen,
    color: "text-blue-600",
  },
  {
    id: "2",
    type: "achievement",
    title: "Course completed!",
    message: "Congratulations! You've completed JavaScript Fundamentals.",
    time: "1 day ago",
    read: false,
    icon: Star,
    color: "text-yellow-600",
  },
  {
    id: "3",
    type: "social",
    title: "New course recommendation",
    message: "Based on your learning history, we recommend Advanced CSS Techniques.",
    time: "2 days ago",
    read: true,
    icon: Users,
    color: "text-green-600",
  },
  {
    id: "4",
    type: "system",
    title: "Profile updated successfully",
    message: "Your profile information has been updated.",
    time: "3 days ago",
    read: true,
    icon: Bell,
    color: "text-gray-600",
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications)
  const [filter, setFilter] = useState("all")

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "unread") return !notif.read
    if (filter === "read") return notif.read
    return true
  })

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold">Notifications</h1>
          {unreadCount > 0 && (
            <p className="text-muted-foreground mt-2">
              You have {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
            </p>
          )}
        </div>
        {unreadCount > 0 && (
          <Button onClick={markAllAsRead} variant="outline">
            Mark all as read
          </Button>
        )}
      </div>

      <Tabs value={filter} onValueChange={setFilter} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
          <TabsTrigger value="read">Read ({notifications.length - unreadCount})</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        {filteredNotifications.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-lg mb-2">No notifications</h3>
              <p className="text-muted-foreground">
                {filter === "unread" ? "All caught up! No unread notifications." : "No notifications to show."}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredNotifications.map((notification) => {
            const IconComponent = notification.icon
            return (
              <Card key={notification.id} className={`${!notification.read ? "border-primary/50 bg-primary/5" : ""}`}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-full bg-background ${notification.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{notification.title}</h3>
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <Badge variant="secondary" className="text-xs">
                              New
                            </Badge>
                          )}
                          <span className="text-sm text-muted-foreground">{notification.time}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-3">{notification.message}</p>
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <Button variant="outline" size="sm" onClick={() => markAsRead(notification.id)}>
                            <Check className="h-4 w-4 mr-1" />
                            Mark as read
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteNotification(notification.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })
        )}
      </div>
    </div>
  )
}
