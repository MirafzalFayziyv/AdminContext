import { useAuth } from './../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


const RequireAuth = ({children}) => {
    const location = useLocation()
    const {user, admin} = useAuth()
    console.log(admin)
    if((!user || !admin)){
        return <Navigate to='/login' state={{from: location}}/>
    }
    return children

}

export default RequireAuth