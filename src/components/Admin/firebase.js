import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAh3SKbiaCcrIrfmFKo1ouBpGDD0gADHIM",
  authDomain: "netflix-webapplication.firebaseapp.com",
  projectId: "netflix-webapplication",
  storageBucket: "netflix-webapplication.appspot.com",
  messagingSenderId: "469330130354",
  appId: "1:469330130354:web:bc2e3eb3e936b0ba49e0ab"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
