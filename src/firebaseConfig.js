const Rebase = require('re-base')
const firebase = require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyB6rnM3Z5zbPBlEhMShOCnYIGGIgd6BoGk",
  authDomain: "sendon-portfolio.firebaseapp.com",
  databaseURL: "https://sendon-portfolio.firebaseio.com",
  projectId: "sendon-portfolio",
  storageBucket: "sendon-portfolio.appspot.com",
  messagingSenderId: "957933978890",
  appId: "1:957933978890:web:d0083e7c60df4cf3"
}

const app = firebase.initializeApp(firebaseConfig)
const config = Rebase.createClass(app.database())

export const storage = app.storage()
export const auth = app.auth()

export default config;