import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../../Controllers/Hooks/app-hooks";

type AuthProviderProps = {
    children: JSX.Element;
};

export default function RequireAuth({ children }: AuthProviderProps) {
    const { users } = useAppSelector((users) => users);
    const { auth } = useAppSelector((auth) => auth);
    const location = useLocation();
    users.forEach((user) => {
        //      if (auth.LoggedIn && user.role === "dev" || user.role === "admin") {
        //          return children;
        //      }
    });

    return <h2>Sorry you do not have permission to view this page</h2>;
    //TODO:Implement a authentication route;
}
