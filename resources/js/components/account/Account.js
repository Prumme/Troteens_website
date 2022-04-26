import React, { useContext, useLayoutEffect, useState } from 'react';
import { AuthContext, AuthLoadingContext } from "../context/AuthContext";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router";

const Account = () => {
    let { auth } = useContext(AuthContext);
    let { loaded } = useContext(AuthLoadingContext);
    let navigate = useNavigate();

    useLayoutEffect(() => {
        console.log("loaded est " + loaded)
        console.log("auth est " + auth)
        if (loaded) {
            if (!auth) {
                return navigate('/');
            }
        }
    }, [auth, loaded]);

    return (
        <div className="rounded-3 bg-dark p-6 text-white">
            <p>Voici mon compte</p>
            {(auth) ? <Outlet /> : <CircularProgress />}
        </div>
    );
};

export default Account;
