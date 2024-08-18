import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

/**
 * Firebase configuration object.
 * These values are sourced from environment variables.
 * 
 * @type {Object}
 * @property {string} apiKey - Firebase API key
 * @property {string} authDomain - Firebase Auth domain
 * @property {string} projectId - Firebase project ID
 * @property {string} storageBucket - Firebase storage bucket
 * @property {string} messagingSenderId - Firebase messaging sender ID
 * @property {string} appId - Firebase app ID
 * @property {string} measurementId - Firebase measurement ID
 */
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID,
    measurementId: import.meta.env.VITE_MEASUREMENTID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginWithGoogle = () => {
    const auth = getAuth(app);
    signInWithPopup(auth, new GoogleAuthProvider());
};

export { auth, loginWithGoogle };
