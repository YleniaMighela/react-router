import NavBar from "./Navbar";

export default function Header() {

    //DATI RICAVATI PER LA GESTIONE DEI LINK DELLA NAVBAR
    const links = [
        { id: 1, text: 'Home', url: '/' },
        { id: 2, text: 'Chisiamo', url: '/chisiamo' },
        { id: 3, text: 'Post', url: '/post' },
        { id: 4, text: 'Aggiungi un post', url: '/aggiungipost' },

    ];

    return (
        <header>
            <NavBar linksProp={links} />
        </header>
    );
}