import React from 'react'
import "./Post.css"
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className ="post__header">
                <Avatar 
                className="post_avatar"
                alt="arunsmith60"
                src="/static/images/avatar/1.jpg" 
                />
                <h3>Username</h3>
            </div>
            <img className="post__image" src="https://myhero.com/images/guest/g282317/hero105677/image2.jpg" />
            <h4 className="post__text"><strong>arunsmith60:</strong> Caption</h4>

        </div>
    )
}

export default Post
