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
        id_author:0   
    });
    const [authorName, setAuthorName] = useState("");
    
 
    useEffect(() => {
        fetch('http://localhost:8000/posts/' + id)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                fetch('http://localhost:8000/authors/' + data.id_author)
                    .then(res => res.json())
                    .then(authorData => setAuthorName(`${authorData.name} ${authorData.lastname}`))

                    .catch(error => console.error('Error al obtener datos del autor:', error));
            })
            .catch(error => console.error('Error al obtener datos del post:', error));
    }, [id]);


    return(
        <div>
            <h1>{post.title}</h1>
            {post.image && <img src={require("../images/"+post.image+".png")}></img>}
            <Link to={"/blog/author/"+id_author}><h2>{post.authorName}</h2></Link>
            <h2 className="author-link"><Link to={"/blog/author/"+id}>{authorName}</Link></h2>
            <h2>{post.date}</h2>
            <p>{post.text}</p>
        </div>
    );
}
