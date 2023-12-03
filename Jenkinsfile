pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building $BRANCH_NAME'
                    sh './build.sh'
                }
            }
        }
        stage('Test') {
            steps {
                sh 'cd backend/sklep && ./mvnw test -Dspring.profiles.active=test'
            }
        }
        stage('Collect artifacts') {
            steps {
                dir('backend/sklep') {
                   sh './mvnw help:effective-settings'
               }
            }
        }
    }
}

