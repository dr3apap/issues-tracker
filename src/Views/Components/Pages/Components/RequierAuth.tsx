
import { Navigate, useLocation} from 'react-router-dom';
import { useSelector} from 'react-redux'
import { RootState } from '../../../../Controllers/Redux/rootReducer';

type AuthProviderProps = {
   children:JSX.Element,
}


export default function RequireAuth({children}:AuthProviderProps){

    const {auth} = useSelector((state:RootState) => state);
    const location = useLocation();


    if(!auth.LoggedIn){
       return <Navigate to="/login" state={{from:location}} replace/>;
    } 

   
    return children;

    //TODO:Implement a authentication route;

}