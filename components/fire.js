import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCira7eennip48_ov0QAi0shwwRGTzzWhA',
  authDomain: 'merge-22e45.firebaseapp.com',
  databaseURL: 'https://merge-22e45.firebaseio.com',
  projectId: 'merge-22e45',
  storageBucket: 'merge-22e45.appspot.com',
  messagingSenderId: '389847263058'
}

const fire = firebase.initializeApp(config)

export default fire
