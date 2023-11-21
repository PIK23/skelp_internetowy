pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    sh './build.sh'
                }
            }
        }
        stage('Collect artifacts'){
            when {
                expression {
                    return env.BRANCH_NAME != 'master';
                }
            }
            steps {
                echo 'Collecting artifacts (backend/sklep/target/*.jar)'
            }
        }
    }
}

