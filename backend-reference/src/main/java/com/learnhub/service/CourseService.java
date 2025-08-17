package com.learnhub.service;

import com.learnhub.model.Course;
import com.learnhub.model.Enrollment;
import com.learnhub.model.User;
import com.learnhub.repository.CourseRepository;
import com.learnhub.repository.EnrollmentRepository;
import com.learnhub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CourseService {
    
    @Autowired
    private CourseRepository courseRepository;
    
    @Autowired
    private EnrollmentRepository enrollmentRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
    
    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }
    
    public List<Course> searchCourses(String keyword) {
        return courseRepository.searchCourses(keyword);
    }
    
    public List<Course> getCoursesByCategory(String category) {
        return courseRepository.findByCategory(category);
    }
    
    public List<Course> getEnrolledCourses(Long userId) {
        List<Enrollment> enrollments = enrollmentRepository.findByUserId(userId);
        return enrollments.stream()
                .map(Enrollment::getCourse)
                .toList();
    }
    
    public boolean enrollInCourse(Long userId, Long courseId) {
        if (enrollmentRepository.existsByUserIdAndCourseId(userId, courseId)) {
            return false; // Already enrolled
        }
        
        User user = userRepository.findById(userId).orElseThrow();
        Course course = courseRepository.findById(courseId).orElseThrow();
        
        Enrollment enrollment = new Enrollment(user, course);
        enrollmentRepository.save(enrollment);
        
        return true;
    }
}
