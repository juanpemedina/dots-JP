import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Author() {
    const { id_post } = useParams();
    const [author, setAuthor] = useState({
        id: 0,
        id_author: 0,
        name:"",
        last_name:"",
        phone: "",
        birthdate: "",
        email: ""
    });

    useEffect(() => {
        fetch('http://localhost:8000/posts/'+id_author)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [id_post])

  return (
    <div>
      <h1>{author.name+"" +author.last_name}</h1>
      <h2>{author.phone}</h2>
      <h2>{author.email} </h2>
      <p>{author.birthdate}</p>
    </div>
  );
}

