import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router'

import AuthContext from '../context/auth/authContext';

export default function PublicRoute({ component: Component, ...props }) {

    const { authenticated, authenticatedUser, loading } = useContext(AuthContext);

    // console.log(authenticated,loading)
    useEffect(() => {

        authenticatedUser();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Route {...props} exact={true} render={props => authenticated && !loading ? (
            <Redirect to="/dashboard" />

        ) : (loading ?
            <div style={{height:"100vh", background:"white", justifyContent:"center",display:"flex", alignItems:"center"}}>
                <img  src="/images/preloader.gif" alt='preloader'/>
              
            </div>
            : (<Component {...props} />))} />

    );
}