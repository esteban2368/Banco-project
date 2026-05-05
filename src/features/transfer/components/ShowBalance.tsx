
import type { Balance } from "../models/Transfer";

export const ShowBalance = ({ balancePromise }: { balancePromise: Promise<Balance> }) => {

    if (!result.success) {
        return <p className="error">{result.message}</p>;
    }
    return (
        <div>
            <h1>Show Balance</h1>

        </div>
    );
};