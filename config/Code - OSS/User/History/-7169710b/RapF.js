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
        fetch('http://localhost:8000/posts/'+id_post)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }, [id_post])

  return (
    <div>
      <h1>{post.name+"" +post.last_name}</h1>
      <h2>{post.phone}</h2>
      <h2>{post.email} </h2>
      <p>{post.birthdate}</p>
    </div>
  );
}



        name: "",
        lastname: "",
        date_of_birth: "",
        email: "",
        phone_number: ""
    });
    const { id_author } = useParams();

    useEffect(() => {
        fetch(http://localhost:8000/authors/${id_author})
            .then(res => res.json())
            .then(data => setAuthor(data))
            .catch(error => console.error('Error al obtener datos del autor:', error));
    }, [id_author]);

    return (
        <div className="author-container">
            <h1 className="author-name">{author.name} {author.lastname}</h1>
            <p className="author-detail"><strong>Fecha de nacimiento:</strong> {author.date_of_birth}</p>
            <p className="author-detail"><strong>Email:</strong> <a className="author-email" href={mailto:${author.email}}>{author.email}</a></p>
            <p className="author-detail"><strong>Número de teléfono:</strong> {author.phone_number}</p>
        </div>
    )
}