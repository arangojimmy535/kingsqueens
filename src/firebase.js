// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB7W9qdEvyHR5t-O7yhgbapC1piUXX_oZ4',
  authDomain: 'kingsandqueens-867fd.firebaseapp.com',
  projectId: 'kingsandqueens-867fd',
  storageBucket: 'kingsandqueens-867fd.appspot.com',
  messagingSenderId: '441324503511',
  appId: '1:441324503511:web:0b628fb5f470534ad74b92'
}

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig)
export const auth = getAuth(firebase)
