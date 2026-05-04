import { Navigate } from "react-router-dom";

interface GuardProps {
    isAutorizated: boolean;
    redirectTo?: string;
    children?: React.ReactNode;
}

export const Guard = ({ isAutorizated, redirectTo = '/', children }: GuardProps) => {
    if (!isAutorizated) {
        return <Navigate to={redirectTo} replace/>;
    }
    return <>
        {children}
    </>;
}