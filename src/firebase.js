import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC6w2eVdlgM_EZdG3jzw8hT7LjKtpnaOOU",
    authDomain: "stanfordgrub.firebaseapp.com",
    projectId: "stanfordgrub",
    storageBucket: "stanfordgrub.appspot.com",
    messagingSenderId: "249164096458",
    appId: "1:249164096458:web:8145b3609aba365b70a533"
};

  const app = initializeApp(firebaseConfig);
  export const firestore = getFirestore(app)
  export const storage = getStorage(app);
