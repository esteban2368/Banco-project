import { Link } from 'react-router-dom'

export const  AsideMenu = () => {
    return (
        <div>
            <h2>BancoXYZ</h2>
            <nav>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/transfer">Transfer</Link></li>
                </ul>
            </nav>
        </div>
    );
}; 