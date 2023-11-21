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
                sh 'cd backend/sklep && ./mvnw test'
            }
        }
        stage('Collect artifacts') {
            when {
                expression {
                    return env.BRANCH_NAME == 'master';
                }
            }
            steps {
                echo 'Collecting artifacts from master (backend/sklep/target/*.jar)'
            }
        }
    }
}

