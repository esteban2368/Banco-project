import { ContainerPage } from "../shared/components/ContainerPage";
import { TransferForm } from "../features/transfer/components/TransferForm";

const TransferPage = () => {
    return (
        <ContainerPage title={`Realizar una transferencia`}>
            <TransferForm />
        </ContainerPage>
            
    );
};

export default TransferPage;