import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tareas">Tareas</Link>
                </li>
                <li>
                    <Link to="/about_us">About Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
