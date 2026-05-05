import { Header } from "./Header";
import { AsideMenu } from "./AsideMenu";
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <section>
            <Header />
            <div className="grid md:grid-cols-12 md:grid-rows-4 auto-rows-fr gap-6">
                <div className="col-span-4 row-span-4">
                    <AsideMenu/>
                </div>
                <main className="col-span-8 row-span-8">
                    <Outlet />
                </main>
            </div>
        </section>
    );
};

export default Layout;