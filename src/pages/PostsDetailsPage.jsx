import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostsDetailsPage() {
    const { id } = useParams();


    const [posts, setPost] = useState({});



    //funzione di gestione chiamate API
    function fetchPosts() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then((res) => {
                setPost(res.data)
            })

            .catch(err => console.log(err))
    }


    useEffect(() => fetchPosts(), [id]);


    return (
        <div>
            <h1>ID prodotto:{id}</h1>
        </div>
    );

}