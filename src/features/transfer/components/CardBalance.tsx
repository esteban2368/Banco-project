const CardBalance = ({ balance }: { balance: number }) => {
    return (
        <div>
            <h2>Saldo disponible</h2>
            <p>${balance.toFixed(2)}</p>
        </div>
    );
};