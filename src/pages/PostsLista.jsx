import { useState, useEffect } from 'react';
import axios from "axios";


export default function PostsLista() {



    const [posts, setPost] = useState([]);


    //funzione di gestione chiamate API
    function fetchPosts() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => {
                setPost(res.data);
            })
    }

    useEffect(fetchPosts, []);


    return (

        <>

            {posts.map((post) => (

                <div className='container' key={post.id} >
                    <div className='postsitem'>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.content}</p>
                        <span>{post.tags.join(",")}</span>
                    </div>

                </div >
            ))}
        </>
    )

}



