import React from 'react'
import { useAuth } from '../hooks/AuthProvider';

import { AuthRoutes } from './auth.routes';
import { HomeRoutes } from './home.routes';

function Routes(){
    const { data } = useAuth()

    if(!!data.token){
        return <HomeRoutes />
    }

    return <AuthRoutes />
}

export default Routes