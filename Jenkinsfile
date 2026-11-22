
pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'
                bat 'npm ci'
            }
        }

        stage('Unit Testing') {
            steps {
                echo 'Running unit tests...'
                bat 'npm run test:unit'
            }
        }

        stage('Integration Testing') {
            steps {
                echo 'Running integration tests...'
                bat 'npm run test:integration'
            }
        }

        stage('SAST Security Scan') {
            steps {
                echo 'Scanning source code for security vulnerabilities...'

                bat '''
                "C:/Users/DEFAULT.DESKTOP-MKB5J3F/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe" run --rm -v "%WORKSPACE%:/src" semgrep/semgrep semgrep scan --config p/security-audit --error /src
                '''
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'

                bat '"C:/Users/DEFAULT.DESKTOP-MKB5J3F/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe" build -t devops-app:1.0 .'
            }
        }

        stage('Pipeline Summary') {
            steps {
                echo 'Unit tests, integration tests, SAST and Docker build completed successfully!'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: All tests and security scans passed!'
        }

        failure {
            echo 'FAILURE: Tests, Docker build or security scanning detected a problem!'
        }

        always {
            echo 'Jenkins pipeline execution completed.'
        }
    }
}
