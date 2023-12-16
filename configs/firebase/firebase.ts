// import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const env = process.env
const firebaseConfig = {
	apiKey: env.API_KEY,
	authDomain: env.AUTH_DOMAIN,
	projectId: env.PROJECT_ID,
	storageBucket: env.STORAGE_BUCKET,
	messagingSenderId: env.MESSAGE_SENDER_ID,
	appId: env.API_ID,
	measurementId: env.MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
export const db = getFirestore(app)
