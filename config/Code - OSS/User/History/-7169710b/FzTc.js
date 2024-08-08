import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Author() {
    const [author, setAuthor] = useState({
        name: "",
        lastname: "",
        date_of_birth: "",
        email: "",
        phone_number: ""
    });
    const { id_author } = useParams();


    useEffect(() => {
        fetch('http://localhost:8000/posts/'+id_author)
        .then((res) => res.json())
        .then((data) => setAuthor(data))
        .catch(error => console.error('Error al obtener datos del autor:', error));
    }, [id_author])

  return (
    <div>
      <h1>{author.name+ " " +author.last_name}</h1>
      <h2>{author.phone}</h2>
      <h2>{author.email} </h2>
      <p>{author.phone_number}</p>
    </div>
  );
}