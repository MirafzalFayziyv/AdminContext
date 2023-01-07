import {  createContext, useState } from "react";


export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null)
    const isAdmin = (admin) => {
        if(admin === "Admin"){
            console.log(admin)
            setAdmin(admin)
        }

    } 
    const signIn = (newUser, cb) => {
        setUser(newUser)
        cb()
    }
    const signOut = (cb) => {
        setUser(null)
        cb()
    }

    const value = { isAdmin, admin, user, signIn, signOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>

}