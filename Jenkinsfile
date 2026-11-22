
pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Installing project dependencies...'

                bat 'npm ci'

                echo 'Dependencies installed successfully!'
            }
        }

        stage('Unit Testing') {
            steps {
                echo 'Running unit tests...'

                bat 'npm run test:unit'

                echo 'Unit tests completed successfully!'
            }
        }

        stage('Integration Testing') {
            steps {
                echo 'Running integration tests...'

                bat 'npm run test:integration'

                echo 'Integration tests completed successfully!'
            }
        }

        stage('Build') {
            steps {
                echo 'Starting DevOps application Docker build...'

                bat 'npm test'

                bat '"C:/Users/DEFAULT.DESKTOP-MKB5J3F/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe" --version'

                bat '"C:/Users/DEFAULT.DESKTOP-MKB5J3F/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe" build -t devops-app:1.0 .'

                echo 'Docker image build completed!'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: All tests passed and Docker image built successfully.'
        }

        failure {
            echo 'FAILURE: Check the Jenkins Console Output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
