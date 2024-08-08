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
        fetch('http://localhost:8000/post/'+id)
        .then((res) => res.json())
        .then((data) => {setPost(data);
            fetch('http://localhost:8000/author/'+data.id_author)
            .then((res) => res.json())
            .then((dataA) => setAuthorName(dataA.name))
        });

    },[id])

    return(
        <div>
            <h1>{post.title}</h1>
            {post.image && <img src={require("../images/"+post.image+".png")}></img>}
            <Link to={"/blog/author/"+id}><h2>{authorName}</h2></Link>
            <h2 className="author-link"><Link to={"/blog/author/"+id}>{}</Link></h2>
            <h2>{post.date}</h2>
            <p>{post.text}</p>
        </div>
    );
}
