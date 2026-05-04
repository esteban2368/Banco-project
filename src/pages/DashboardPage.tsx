import { useAuth } from "../features/auth/store/AuthContenxt";

const DashboardPage = () => {
    const { currentUser, logout } = useAuth();
    return (
        <div>
            <h1>Dashboard</h1>
            <pre>
                {JSON.stringify(currentUser)}
            </pre>
            <button onClick={()=> logout()}>Cerrar sesión</button>
        </div>
    );
};

export default DashboardPage;