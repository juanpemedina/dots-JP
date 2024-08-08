import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Author() {
    const { id_post } = useParams();
    const [post, setPost] = useState({
        id: 0,
        id_author: 0,
        name:"",
        last_name:"",
        phone: "",
        birthdate: "",
        emial: ""
    });

    useEffect(() => {
        fetch('http://localhost:8000/posts/'+id_post)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [id_post])

  return (
    <div>
      <h1>{post.name+"" +post.last_name}</h1>
      <h2>{post.phone}</h2>
      <h2>{post.emial} </h2>
      <p>{post.birthdate}</p>
    </div>
  );
}