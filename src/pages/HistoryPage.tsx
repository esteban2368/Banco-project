import { ListTransfers } from "../features/transfer/components/ListTransfers";
import { ContainerPage } from "../shared/components/ContainerPage";

const HistoryPage = () => {
    return (
        <ContainerPage title="Historial de transferencias">
            <ListTransfers />
        </ContainerPage>
    )
}

export default HistoryPage;