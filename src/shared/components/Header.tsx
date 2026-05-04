import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <h1>Banco App</h1>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/transfer">Transfer</Link></li>
                </ul>
            </nav>
        </header>
    );
};
