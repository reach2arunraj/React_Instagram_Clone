import React, { useState, useEffect } from 'react'
import "./Post.css"
import Avatar from "@material-ui/core/Avatar";
import { db  } from "./firebase"

function Post({caption, username, imageUrl, postId}) {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState("")

    useEffect(() => {
        let unsubscribe
        if(postId){
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .onSnapshot((snapshot) =>{
                setComments(snapshot.docs.map((doc) => doc.data()));
            })
        }
        return () => {
            unsubscribe()
        }
    }, [postId])

    const postComment = (event) =>{

    }


    return (
        <div className="post">
            <div className ="post__header">
                <Avatar 
                className="post_avatar"
                alt="arunsmith60"
                src="/static/images/avatar/1.jpg" 
                />
                <h3>{username}</h3>
            </div>
            <img className="post__image" src={imageUrl} alt="img"/>
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>

            <div className="post__comments">
                {
                    comments.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))
                }
            </div>

            <form className="post__commentBox">
            <input
                className="post__input"
                type="text"
                placeholder="Add a Comment..."
                value={comment}
                onChange={(event) => setComment(event.target.value)}
            />
            <button
                disabled={!comment}
                className="post__button"
                type="submit"
                onClick={postComment}
            >
            POST
            </button>
            </form>

        </div>
    )
}

export default Post
