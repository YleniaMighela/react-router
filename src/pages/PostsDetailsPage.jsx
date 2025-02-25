import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";


export default function PostsDetailsPage() {
    const { id } = useParams();


    const [post, setPost] = useState({});




    //funzione di gestione chiamate API
    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then((res) => {
                setPost(res.data)
            })

            .catch(err => console.log(err))
    }


    useEffect(() => fetchPost(), [id]);




    return (
        <div>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.content}</p>
        </div>
    );

}