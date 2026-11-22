
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Starting DevOps application build...'

                bat '"C:/Users/DEFAULT.DESKTOP-MKB5J3F/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe" --version'

                bat '"C:/Users/DEFAULT.DESKTOP-MKB5J3F/AppData/Local/Programs/DockerDesktop/resources/bin/docker.exe" build -t devops-app:1.0 .'

                echo 'Docker image build completed!'
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: DevOps application built successfully.'
        }

        failure {
            echo 'FAILURE: Check the Jenkins Console Output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
