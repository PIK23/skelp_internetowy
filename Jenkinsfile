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
                   sh './mvnw deploy'
               }
                dir('frontend') {
                   sh 'npm publish --registry http://localhost:8081/repository/sklep-frontend'
               }
            }
        }
        stage('Deploy')
        {
            when {
                    expression {
                        return env.BRANCH_NAME == 'master';
                    }
                }
                steps {
                    sh 'mkdir -p /var/www/skelp_internetowy/backend/target /var/www/frontend/build'
                    sh 'cp backend/sklep/target/*.jar /var/www/skelp_internetowy/backend/target'
                    sh 'cp frontend/build /var/www/skelp_internetowy/frontend/build'
                    // sh 'docker-compose down pis-sklep && docker-compose up pis-sklep'    
                    sh 'docker-compose down && docker-compose up'    
                }
        }
    }
}