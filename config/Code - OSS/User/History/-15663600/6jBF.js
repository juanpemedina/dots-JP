import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

export default function Post(){
    const {id} = useParams();
    const [post, setPost] = useState({
        id: 0, 
        image:"", 
        text:"", 
        title:"", 
        date:"", 
        id_author:""   
    });
    const [authorName, setAuthorName] = useState("");
    const { id_post } = useParams();
    
    
    useEffect(() => {
        fetch('http://localhost:8000/post/'+id)
        .then((res) => res.json())
        .then((data) => setPost(data));
    },[id])

    return(
        <div>
            <h1>{post.title}</h1>
            {post.image && <img src={require("../images/"+post.image+".png")}></img>}
            <Link to={"/blog/author/"+id}>{post.id_author}<h2>{post.id_author}</h2></Link>
            <Link to={"/blog/author/"+id}><h2>{post.name+ " " + post.last_name}</h2></Link>
            <Link to={/author/${post.id_author}}>{authorName}</Link>
            <h2 className="author-link"></h2>
            <h2>{post.date}</h2>
            <p>{post.text}</p>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../Post.css';

export default function Post() {
    const [post, setPost] = useState({ id_post: 0, title: "", date: "", image: "", text: "", id_author: 0 });
    const [authorName, setAuthorName] = useState("");
    const { id_post } = useParams();

    useEffect(() => {
        fetch('http://localhost:8000/posts/' + id_post)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                fetch('http://localhost:8000/authors/' + data.id_author)
                    .then(res => res.json())
                    .then(authorData => setAuthorName(${authorData.name} ${authorData.lastname}))
                    .catch(error => console.error('Error al obtener datos del autor:', error));
            })
            .catch(error => console.error('Error al obtener datos del post:', error));
    }, [id_post]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options);
    };

    return (
        <div className="post-container">
          
        </div>
    )
}