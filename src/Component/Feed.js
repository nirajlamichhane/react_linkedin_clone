import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import "./Feed.css";
import InputOption from "./InputOption";
import { db } from "./firebase";
import Post from "./Post";
import "firebase/compat/firestore"
import firebase from "firebase/compat/app";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((docs) => ({
          id: docs.id,
          data: docs.data(),
        }))
      )
    );
  }, [posts]);

  const [input, setInputs] = useState("");
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Niraj Lamichhane",
      description: "feeling good😎",
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    setInputs("")
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInputs(e.target.value);
              }}
              placeholder="Start a post"
            />
            <button type="submit"  onClick={sendPost}>
              <SendIcon className="feed__input__button__icon" />
            </button>
          </form>
        </div>

        <div className="feed__inputOption">
          <InputOption
            title="Photos"
            Icon={AddPhotoAlternateIcon}
            color="#1976d2"
          />
          <InputOption
            title="Videos"
            Icon={SubscriptionsIcon}
            color="#5f9b41"
          />
          <InputOption title="Event" Icon={EventNoteIcon} color="#c37d16" />
          <InputOption
            title="Write Article"
            Icon={ArticleIcon}
            color="#e16745"
          />
        </div>
      </div>

      {posts.map(({id,data:{
        name, description,message
      }}) => (
        <Post 
            key={id}
            name={name}
            description={description}
            message={message}
        />
      ))}

     
    </div>
  );
}

export default Feed;



