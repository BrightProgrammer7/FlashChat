// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2XbNiSpTBy9OPMbf51ODtBx41TLVBalI",
  authDomain: "flashchat-akhmim.firebaseapp.com",
  projectId: "flashchat-akhmim",
  storageBucket: "flashchat-akhmim.appspot.com",
  messagingSenderId: "21233624936",
  appId: "1:21233624936:web:15c36eedec2c30bfc818dd",
  measurementId: "G-MYCKYNC9T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app