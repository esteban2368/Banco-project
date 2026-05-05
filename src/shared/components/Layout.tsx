import { Header } from "./Header";
import { AsideMenu } from "./AsideMenu";
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <section>
            <Header />
            <AsideMenu />
            <main>
                <Outlet />
            </main>
        </section>
    );
};

export default Layout;