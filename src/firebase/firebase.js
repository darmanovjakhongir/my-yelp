import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4781CB-yMFhy4V83EBt_415fLEkmKabs",
  authDomain: "my-yelp-a056d.firebaseapp.com",
  databaseURL: "https://my-yelp-a056d-default-rtdb.firebaseio.com",
  projectId: "my-yelp-a056d",
  storageBucket: "my-yelp-a056d.appspot.com",
  messagingSenderId: "765423276394",
  appId: "1:765423276394:web:f61a4d972f915b2e781513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const db = getFirestore(app);
