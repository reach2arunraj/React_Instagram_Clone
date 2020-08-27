import React, {useState} from 'react'
import {Button} from "@material-ui/core"
import { db, storage } from "./firebase"
import firebase from "firebase"

function Imageupload({username}) {
    const [caption, setCaption] = useState("")
    const [progress, setProgress] = useState(0)
    const [image, setImage] = useState(null)

    const handelChange = (event) =>{
        if(event.target.files[0]){
            setImage(event.target.files[0])
        }
    };

    const handelUpload = () =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) =>{
                // Progress Function 
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes ) * 100
                );
                setProgress(progress);
            },
            (error) => {
                // Error function
                alert(error.message);
            },
            () => {
                // Finishing Function
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username
                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);
                })
            }
        )
    }

    return (
        <div>
            <progress value={progress} max="100"/>
            <input type="text" 
            placeholder="Enter a Caption..." 
            value={caption}
            onChange={(event) => setCaption(event.target.value)}
            />
            <input type="file" onChange={handelChange} />
            <Button onClick={handelUpload}>
                Upload
            </Button>
        </div>
    )
}

export default Imageupload
