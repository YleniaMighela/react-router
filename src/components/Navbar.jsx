
import { Link } from "react-router-dom";


export default function NavBar(props) {
    return (
        <nav>

            <ul>
                {props.linksProp.map((link) => (

                    <li key={link.id}>
                        <Link to={link.url}>
                            {link.text}
                        </Link>
                    </li>
                ))
                }
            </ul >
        </nav >
    )
};