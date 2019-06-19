const Rebase = require('re-base')
const firebase = require('firebase')

const firebaseConfig = {}

const app = firebase.initializeApp(firebaseConfig)
const config = Rebase.createClass(app.database())

export const storage = app.storage()
export const auth = app.auth()

export default config;