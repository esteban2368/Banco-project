import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <h1>BancoXYZ</h1>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/transfer">Transfer</Link></li>
                    <li><Link to="/transfer-history">History</Link></li>
                </ul>
            </nav>
        </header>
    );
};
