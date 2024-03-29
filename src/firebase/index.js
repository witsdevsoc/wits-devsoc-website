import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAAy4ysFEV2cnMSndHrrGcE8RP0vFH0EWY',
  authDomain: 'devs-eb708.firebaseapp.com',
  projectId: 'devs-eb708',
  storageBucket: 'devs-eb708.appspot.com',
  messagingSenderId: '408971523802',
  appId: '1:408971523802:web:91d055e07a5be6f48757e3',
  measurementId: 'G-02MX6DW1F9'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {
    db
}
// const analytics = getAnalytics(app);