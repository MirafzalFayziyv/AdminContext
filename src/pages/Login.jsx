import React from 'react';
import { useAuth } from './../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const {signIn, isAdmin} =  useAuth()
   const location  = useLocation()
   const fromPage = location.state?.from?.pathname || '/'
    const hadlaerSubmit  = (event) => {
        event.preventDefault()
        const form = event.target
        const user = form.username.value
        var getValue = form.select.value;
        signIn(user, () => navigate(fromPage, {replace: true}))
        isAdmin(getValue)


        
    }

    
    return (
        <div>
            {fromPage}
            <form onSubmit={hadlaerSubmit}>
                <input type="text" name='username' />
                <select name="select" id="select">
                    <option name="user" value="User">User</option>
                    <option name="admin"  value="Admin">Admin</option>

                </select>
                <button type='submit'> Login </button>
            </form>
        </div>
    );
}

export default Login;
