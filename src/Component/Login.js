
import React, { useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import "./Login.css";
import { login } from "../features/userSlice";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if(!name){
      return alert('enter your full name')
    }

    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profile,
      })
      .then(()=>{
        dispatch(login(
          {
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            profile: profile
          }
        ))
      })
    }).catch(error=> alert(error))
  };


  const loginToApp = (e) => {
    e.preventDefault();
    
  };
  return (
    <div className="login">
      <img
        src="https://www.freepnglogos.com/uploads/linkedin-black-logo-19.png"
        alt="Linked In"
      />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name(Required if registeering)"
          type="text"
        />
        <input
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="Photo Url(Optional)"
          type="text"
        />
        <input
          className="loginField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          className="loginField"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
