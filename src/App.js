import React, { useState } from 'react';
import './App.css';
import Post from "./Post"

function App() {

  const [posts, setPosts] = useState([
    {
    imageUrl: "https://myhero.com/images/guest/g282317/hero105677/image2.jpg",
    username:"arunsmith60",
    caption:"WOW its Hermoine"
  },
  {
    imageUrl: "https://media1.popsugar-assets.com/files/thumbor/fAzDfg5bOasPxyoo9A4CPbgvxWw/660x0:1312x967/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/28/913/n/1922283/d41abaac5e597e33a9d771.12680042_/i/Harry-Potter-Quotes-Quiz.jpg",
    username:"Deepak",
    caption:"WOW its HArry potter"
  }
])
  

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
        posts.map(post =>(
          <Post username={post.username} imageUrl={post.imageUrl} caption={post.caption} />
        ))
      }
    </div>

  );
}

export default App;
 