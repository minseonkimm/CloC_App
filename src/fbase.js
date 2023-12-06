import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import { auth } from './fbase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import Test from './Test';

const firebaseConfig = {
    apiKey: "AIzaSyD7jlUzKiSs6oLOMptBnweP8XhrOuiUyZ8",
    authDomain: "cloc-bdf74.firebaseapp.com",
    databaseURL: "https://cloc-bdf74-default-rtdb.firebaseio.com/",
    projectId: "cloc-bdf74",
    storageBucket: "cloc-bdf74.appspot.com",
    messagingSenderId: "485093561661",
    appId: "1:485093561661:web:e4d4743dda2407b90f2154",
    measurementId: "G-ZXG5FLMMFN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };


function App() {
    const [userData, setUserData] = useState(null);

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider(); // provider�� ���۷� ����
        signInWithPopup(auth, provider) // popup�� �̿��� signup
            .then((data) => {
                setUserData(data.user); // user data ����
                console.log(data) // console�� ���� ������ ǥ��
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Test></Test>
            <button onClick={handleGoogleLogin}>Login</button>
            {userData ? userData.displayName : null}
        </div>
    );
}

export default App;