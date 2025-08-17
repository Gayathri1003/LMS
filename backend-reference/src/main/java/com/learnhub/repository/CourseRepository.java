package com.learnhub.repository;

import com.learnhub.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByInstructorId(Long instructorId);
    List<Course> findByTitleContainingIgnoreCase(String title);
    List<Course> findByCategory(String category);
    
    @Query("SELECT c FROM Course c WHERE c.title LIKE %:keyword% OR c.description LIKE %:keyword%")
    List<Course> searchCourses(@Param("keyword") String keyword);
}
