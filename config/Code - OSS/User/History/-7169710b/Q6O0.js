import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Author() {
    const [author, setAuthor] = useState({
        name:"",
        last_name:"",
        phone: "",
        birthdate: "",
        email: ""
    });
    const { id_author } = useParams();


    useEffect(() => {
        fetch('http://localhost:8000/posts/'+id_author)
        .then((res) => res.json())
        .then((data) => setAuthor(data));
        .catch(error => console.error('Error al obtener datos del autor:', error));
    }, [id_author])

  return (
    <div>
      <h1>{author.name+ " " +author.last_name}</h1>
      <h2>{author.phone}</h2>
      <h2>{author.email} </h2>
      <p>{author.birthdate}</p>
    </div>
  );
}

export default function Autor() {
    const [author, setAuthor] = useState({
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