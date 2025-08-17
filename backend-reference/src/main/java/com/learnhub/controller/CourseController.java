package com.learnhub.controller;

import com.learnhub.model.Course;
import com.learnhub.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {
    
    @Autowired
    private CourseService courseService;
    
    @GetMapping
    public ResponseEntity<List<Course>> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<Course>> searchCourses(@RequestParam String q) {
        List<Course> courses = courseService.searchCourses(q);
        return ResponseEntity.ok(courses);
    }
    
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Course>> getCoursesByCategory(@PathVariable String category) {
        List<Course> courses = courseService.getCoursesByCategory(category);
        return ResponseEntity.ok(courses);
    }
    
    @PostMapping("/{courseId}/enroll")
    @PreAuthorize("hasRole('STUDENT') or hasRole('INSTRUCTOR')")
    public ResponseEntity<String> enrollInCourse(@PathVariable Long courseId, Principal principal) {
        // You'll need to get user ID from the principal/token
        // This is a simplified version
        boolean enrolled = courseService.enrollInCourse(1L, courseId); // Replace with actual user ID
        
        if (enrolled) {
            return ResponseEntity.ok("Successfully enrolled in course");
        } else {
            return ResponseEntity.badRequest().body("Already enrolled or enrollment failed");
        }
    }
}
