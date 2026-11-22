
# Student Management System

## Project Description
This project demonstrates Node.js, npm, Express.js and JSON fundamentals for application development.

It uses an existing HTML and CSS frontend with a Node.js backend to provide student information through REST API endpoints.

## Technologies Used
- Node.js
- npm
- Express.js
- JSON
- HTML
- CSS

## Project Structure
```text
stud_management/
├── css/
├── index.html
├── login.html
├── register.html
├── server.js
├── package.json
├── package-lock.json
├── sample-students.json
├── README.md
└── node_modules/
```

## Installation

1. Install Node.js and npm.
2. Open the project directory.
3. Install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
node server.js
```

The application runs at:

http://localhost:8001

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Homepage |
| GET | /api/health | Check API status |
| GET | /api/students | Retrieve all students |
| GET | /api/students/:id | Retrieve one student |

## Testing the API

```bash
curl http://localhost:8001/api/health
curl http://localhost:8001/api/students
curl http://localhost:8001/api/students/1
```

## JSON Data

Student records are stored in `sample-students.json`.

## Author
Student Management System - Activity 3
