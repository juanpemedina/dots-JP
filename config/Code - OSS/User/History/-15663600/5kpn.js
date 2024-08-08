import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export default function Post(){
    const {id} = useParams();
    const [post, setPost] = useState({id: 0, image:"", text:"", title:"", date:"", id_author:""});
    
    useEffect(() => {
        fetch('http://localhost:8000/post/'+id)
        .then((res) => res.json())
        .then((data) => setPost(data));
    },[id])

    return(
        <div>
            <h1>{post.title}</h1>
            {post.image && <img src={require("../images/"+post.image+".png")}></img>}
            <h2>{post.id_author}</h2>
            <h2><Link to={"/author/"}>{post.id_author}</Link></h2>
            <h2>{post.date}</h2>
            <p>{post.text}</p>
        </div>
    );
}