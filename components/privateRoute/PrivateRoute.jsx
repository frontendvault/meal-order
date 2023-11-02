import Signup from '@/pages/auth/sign-up';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

const PrivateRoute = ({ children }) => {

    const [token, setToken] = useState("")

    useEffect(() => {
        const Token = Cookies.get("access-token");
        setToken(Token)
    }, [Cookies])

    if (token) {
        return children
    }
    
    if(!token){
        return  <Signup />

    }
}

export default PrivateRoute