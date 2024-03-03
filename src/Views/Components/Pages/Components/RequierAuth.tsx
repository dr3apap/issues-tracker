
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../Controllers/Hooks/app-hooks'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../Controllers/Redux/rootReducer';

type AuthProviderProps = {
    children: JSX.Element,
}


export default function RequireAuth({ children }: AuthProviderProps) {
    const { auth } = useAppSelector((auth) => auth);
    const location = useLocation();
    if (!auth.LoggedIn) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;

    //TODO:Implement a authentication route, from the backend with cookies or section;
}
