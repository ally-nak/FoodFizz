import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult} from "firebase/auth";

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

  /* GOOGLE SIGN-IN AND AUTH */
  export const provider = new GoogleAuthProvider();
  export const auth = getAuth(app);

  export const signInWithGoogle = () => {
    signInWithRedirect(auth, provider);
  }

  export const googleSignout = () => {
    auth.signOut().then(function() {
       console.log('Signout Succesfull')
    }, function(error) {
       console.log('Signout Failed')  
    });
 }

  export const getUserInfo = () => {
    console.log("ENTEREDD");
    getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("results", result);
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

