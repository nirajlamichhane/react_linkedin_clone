import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Feed from "./Component/Feed";
import { auth } from "./Component/firebase";
import Header from "./Component/Header";
import Login from "./Component/Login";
import Sidebar from "./Component/Sidebar";
import { login, selectUser } from "./features/userSlice";


function App() {
  const dispatch = useDispatch(); 
  const user = useSelector(selectUser);
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.displayName,
          profile: userAuth.profile

        }))
      }
    })
  },[])
  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* widget bar */}
        </div>
      )}
    </div>
  );
}

export default App;
