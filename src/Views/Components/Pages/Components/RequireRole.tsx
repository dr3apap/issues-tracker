import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Controllers/Redux/rootReducer";

type AuthProviderProps = {
    children: JSX.Element;
};

export default function RequireAuth({ children }: AuthProviderProps) {
    const { users } = useSelector((state: RootState) => state);
    const { auth } = useSelector((state: RootState) => state);
    const location = useLocation();


    users.forEach((user) => {


        //      if (auth.LoggedIn && user.role === "dev" || user.role === "admin") {
        //          return children;
        //      }
    });

    return <h2>Sorry you do not have permission to view this page</h2>;
    //TODO:Implement a authentication route;
}
