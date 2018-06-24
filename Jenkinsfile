node {
  try {
    stage('Checkout') {
      sudo checkout scm
    }
    stage('Environment') {
      sudo sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sudo sh 'docker -v'
      sudo sh 'printenv'
    }
    stage('Build Docker test'){
      sudo sh 'docker build -t react-test -f Dockerfile.test --no-cache . '
    }
    stage('Docker test'){
      sudo sh 'docker run --rm react-test'
    }
    stage('Clean Docker test'){
      sudo sh 'docker rmi react-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sudo sh 'docker build -t react-app --no-cache .'
        sudo sh 'docker tag react-app localhost:5000/react-app'
        sudo sh 'docker push localhost:5000/react-app'
        sudo sh 'docker rmi -f react-app localhost:5000/react-app'
      }
    }
  }
  catch (err) {
    throw err
  }
}
