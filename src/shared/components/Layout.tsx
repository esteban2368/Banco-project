import { Header } from "@components/Header";
import { Routes, Route } from 'react-router-dom'

//Pages
import LoginPage from "@pages/LoginPage";
import DashboardPage from "@pages/DashboardPage";
import TransferPage from "@pages/TransferPage";


const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            // Rutas
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/transfer" element={<TransferPage />} />
            </Routes>
        </div>
    );
};

export default Layout;