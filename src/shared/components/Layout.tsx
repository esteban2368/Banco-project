import { Header } from "./Header";
import { AsideMenu } from "./AsideMenu";
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <AsideMenu />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;