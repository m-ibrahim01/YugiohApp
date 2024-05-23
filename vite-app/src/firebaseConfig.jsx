import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCUJRK9hz4kM6E1Yqs238QhdaNtMNUCotM",
    authDomain: "yugiohapp-77a06.firebaseapp.com",
    projectId: "yugiohapp-77a06",
    storageBucket: "yugiohapp-77a06.appspot.com",
    messagingSenderId: "144516531845",
    appId: "1:144516531845:web:3249bd88a68edb41108bec"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
