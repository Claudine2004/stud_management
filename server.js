
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8001;

// Middleware
app.use(express.json());

// Serve frontend files (HTML, CSS and other static files)
app.use(express.static(__dirname));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API health check
app.get("/api/health", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Student Management API is running"
    });
});

// Read student records from JSON file
function getStudents(callback) {
    const filePath = path.join(__dirname, "sample-students.json");

    fs.readFile(filePath, "utf8", (error, data) => {
        if (error) {
            return callback(error, null);
        }

        try {
            const students = JSON.parse(data);
            callback(null, students);
        } catch (parseError) {
            callback(parseError, null);
        }
    });
}

// GET all students
app.get("/api/students", (req, res) => {
    getStudents((error, students) => {
        if (error) {
            return res.status(500).json({
                status: "error",
                message: "Unable to read student records"
            });
        }

        res.status(200).json({
            status: "success",
            total: students.length,
            students: students
        });
    });
});

// GET one student by ID
app.get("/api/students/:id", (req, res) => {
    const studentId = Number(req.params.id);

    if (!Number.isInteger(studentId) || studentId < 1) {
        return res.status(400).json({
            status: "error",
            message: "Invalid student ID"
        });
    }

    getStudents((error, students) => {
        if (error) {
            return res.status(500).json({
                status: "error",
                message: "Unable to read student records"
            });
        }

        const student = students.find(item => item.id === studentId);

        if (!student) {
            return res.status(404).json({
                status: "error",
                message: "Student not found"
            });
        }

        res.status(200).json({
            status: "success",
            student: student
        });
    });
});

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        status: "error",
        message: "Route not found"
    });
});

// Start server only when running directly
if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Student Management System running at http://localhost:${PORT}`);
    });
}

// Export app for Jest and Supertest
module.exports = app;
