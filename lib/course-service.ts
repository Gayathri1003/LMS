import { apiClient } from "./api"

export interface Course {
  id: string
  title: string
  subtitle: string
  description: string
  instructor: {
    id: string
    name: string
    avatar?: string
    title: string
    rating: number
    students: number
    courses: number
  }
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  students: number
  duration: string
  lectures: number
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED"
  language: string
  category: string
  image: string
  preview?: string
  lastUpdated: string
  whatYouWillLearn: string[]
  curriculum: CourseSection[]
  isEnrolled?: boolean
  progress?: number
}

export interface CourseSection {
  id: string
  title: string
  lectures: number
  duration: string
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  duration: string
  preview?: boolean
  completed?: boolean
  videoUrl?: string
}

export interface EnrolledCourse extends Course {
  enrolledDate: string
  progress: number
  completedLessons: number
  totalLessons: number
  lastWatched?: string
  timeSpent: string
  status: "IN_PROGRESS" | "COMPLETED" | "NOT_STARTED"
}

export interface CourseFilters {
  category?: string
  level?: string
  duration?: string
  price?: string
  rating?: number
  search?: string
  sortBy?: string
}

class CourseService {
  async getCourses(filters?: CourseFilters): Promise<Course[]> {
    const params = new URLSearchParams()

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value.toString())
      })
    }

    const queryString = params.toString()
    return apiClient.get<Course[]>(`/courses${queryString ? `?${queryString}` : ""}`)
  }

  async getCourse(id: string): Promise<Course> {
    return apiClient.get<Course>(`/courses/${id}`)
  }

  async getFeaturedCourses(): Promise<Course[]> {
    return apiClient.get<Course[]>("/courses/featured")
  }

  async getEnrolledCourses(): Promise<EnrolledCourse[]> {
    return apiClient.get<EnrolledCourse[]>("/courses/enrolled")
  }

  async enrollInCourse(courseId: string): Promise<void> {
    return apiClient.post(`/courses/${courseId}/enroll`)
  }

  async updateProgress(courseId: string, lessonId: string): Promise<void> {
    return apiClient.post(`/courses/${courseId}/lessons/${lessonId}/complete`)
  }

  async getRecommendedCourses(): Promise<Course[]> {
    return apiClient.get<Course[]>("/courses/recommended")
  }

  async searchCourses(query: string): Promise<Course[]> {
    return apiClient.get<Course[]>(`/courses/search?q=${encodeURIComponent(query)}`)
  }
}

export const courseService = new CourseService()
