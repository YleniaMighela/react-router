import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddPosts() {

    // mi creo una variabile di stato(oggetto) in cui si andranno a mappare le proprietà selezionate assegnandogli un valore iniziale

    const initialFormData = {
        title: "",
        image: "",
        content: "",
        tags: [],
    };


    // utilizzo lo useState per la gestione delle informazioni raccolte dai campi del form
    const [formData, setFormData] = useState(initialFormData);

    // funzione che andrà a gestire le informazioni dei campi
    function handleFormData(e) {
        // gestione del value a seconda del tipo di input
        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

        // inquesto momento currentFormaData prende tutti l'oggetto precedente, ma al momento dell'onChange lo modifica con i nuovi dati inseriti
        setFormData((currentformData) => ({
            ...currentformData,
            [e.target.name]: value,
        }));
    }


    const navigate = useNavigate();


    // funzione che andrà a gestire l'intero form con tutte le info relative
    function handleSubmit(e) {
        e.preventDefault();
        // prendimi dvdDIsney allo suo stato precedente e ritornami un nuovo array con tutto il contenuto che c'era nell'array precedente aggiungendo un nuovo oggetto
        // setPost((post) => [...post, { id: post[post.length - 1].id + 1, ...formData }]);

        // invio dati BE
        axios.post("http://localhost:3000/posts/", formData)
            .then((res) =>

                navigate("/post")
            )
            .catch(err => {
                console.log(err)
            })

        // reset del form

        setFormData(initialFormData)

    }



    return (
        <>
            {/* sezione in cui si gestirà il form delle informazioni */}
            <form id='form' onSubmit={handleSubmit}>
                {/* input per inserimento nome */}
                <input
                    type="text"
                    name="title"
                    onChange={handleFormData}
                    value={formData.title}
                    placeholder='Nome dolce'
                />

                {/* input per inserimento immagine */}
                <input
                    type="text"
                    name="image"
                    onChange={handleFormData}
                    value={formData.image}
                    placeholder='Immagine dolce'
                />

                {/* input per inserimento contenuto */}
                <input
                    type="text"
                    name="content"
                    onChange={handleFormData}
                    value={formData.content}
                    placeholder='Contenuto del post'
                />


                {/* input per tags */}
                <input
                    type="text"
                    name="tags"
                    onChange={handleFormData}
                    value={formData.tags}
                    placeholder='Contenuto del tags'
                />

                {/* bottone di invio dei dati */}
                <button>Aggiungi</button>
            </form>



        </>

    );
}