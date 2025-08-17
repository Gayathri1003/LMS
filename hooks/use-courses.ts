"use client"

import { useState, useEffect } from "react"
import { courseService, type Course, type EnrolledCourse, type CourseFilters } from "@/lib/course-service"

export function useCourses(filters?: CourseFilters) {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCourses = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await courseService.getCourses(filters)
      setCourses(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch courses")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [filters])

  return { courses, isLoading, error, refetch: fetchCourses }
}

export function useCourse(id: string) {
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCourse = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await courseService.getCourse(id)
      setCourse(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch course")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      fetchCourse()
    }
  }, [id])

  return { course, isLoading, error }
}

export function useEnrolledCourses() {
  const [courses, setCourses] = useState<EnrolledCourse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchEnrolledCourses = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await courseService.getEnrolledCourses()
      setCourses(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch enrolled courses")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchEnrolledCourses()
  }, [])

  return { courses, isLoading, error, refetch: fetchEnrolledCourses }
}
