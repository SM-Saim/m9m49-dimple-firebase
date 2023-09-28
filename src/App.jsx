import { useState } from "react";
import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      {user && (
        <div className="card">
          <h2>User Name: {user.displayName}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </>
  );
}

export default App;
