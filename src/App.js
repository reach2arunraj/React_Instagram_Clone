import React, { useState,useEffect } from 'react';
import './App.css';
import Post from "./Post"
import { db } from "./firebase"

function App() {

  const [posts, setPosts] = useState([])

useEffect(() =>{
  db.collection("posts").onSnapshot(snapshot =>{
    // Whenever a new post added, this code is triggered
    setPosts(snapshot.docs.map(doc => ({
      id:doc.id,
      post: doc.data()
    })))
  })
},[])
  

  return (
    <div className="app">
      <div className="app__header">
        <img
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="insta logo"
        />
      </div>
      
      <h1>Hello World this is Arun from India, This is my React Instagram clone Application...</h1>
      {
        posts.map(({id, post}) =>(
          <Post key={id} username={post.username} imageUrl={post.imageUrl} caption={post.caption} />
        ))
      }
    </div>
  );
}

export default App;
 