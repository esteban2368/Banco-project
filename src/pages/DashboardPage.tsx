import { ContainerPage } from "../shared/components/ContainerPage";
import { CardBalance } from "../features/transfer/components/CardBalance";

import { useAuth } from "../features/auth/store/AuthContenxt";

const DashboardPage = () => {
    const { currentUser } = useAuth();
    return (
        <ContainerPage title={`Bienvenido, ${currentUser?.name}`}>
            <CardBalance />
        </ContainerPage>
    );
};

export default DashboardPage;