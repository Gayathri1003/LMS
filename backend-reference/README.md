# LearnHub Backend - Spring Boot

This is the Spring Boot backend for the LearnHub LMS application.

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- MySQL 8.0+

## Setup Instructions

1. **Clone and Setup Project**
   \`\`\`bash
   # Extract the backend-reference folder to your desired location
   cd backend-reference
   \`\`\`

2. **Database Setup**
   \`\`\`bash
   # Create MySQL database
   mysql -u root -p
   CREATE DATABASE learnhub_db;
   exit
   
   # Run the schema script
   mysql -u root -p learnhub_db < database/schema.sql
   \`\`\`

3. **Configure Application Properties**
   \`\`\`bash
   # Edit src/main/resources/application.properties
   # Update database credentials:
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   \`\`\`

4. **Install Dependencies and Run**
   \`\`\`bash
   mvn clean install
   mvn spring-boot:run
   \`\`\`

5. **Test the API**
   \`\`\`bash
   # Test registration
   curl -X POST http://localhost:8080/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "email": "test@example.com",
       "password": "password123",
       "firstName": "Test",
       "lastName": "User"
     }'
   \`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/{id}` - Get course by ID
- `GET /api/courses/search?q=keyword` - Search courses
- `POST /api/courses/{id}/enroll` - Enroll in course (requires auth)

## Frontend Integration

Update your React app's API configuration:

\`\`\`javascript
// In your React app
const API_BASE_URL = 'http://localhost:8080/api';
\`\`\`

The backend will run on port 8080 and your React app should run on port 3000.
