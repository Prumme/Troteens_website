import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CircularProgress, Grid } from "@mui/material";
import { Outlet } from "react-router";
import verifyAuth from "../auth/verifyAuth";
import "./style.css";
import { NavLink } from "react-router-dom";
import {useTranslation} from 'react-i18next';


const Account = () => {
    let { auth } = useContext(AuthContext);
    verifyAuth();

    const {t, i18n} = useTranslation();

    const selected = (link) => {
        return window.location.pathname.indexOf("account/" + link) >= 0 ?
            "no-underline pl-6 py-2 flex items-center text-s uppercase leading-snug text-orange-300  w-min whitespace-nowrap" :
            "transition no-underline px-2 py-2 flex items-center text-s uppercase leading-snug text-black-trot hover:translate-x-6 ease-in-out  w-min whitespace-nowrap";
    };


    return (

        <section id="sectionAccount">
            <div className="m-auto text-center md:w-8/12">
                <h2 className="text-2xl text-black-trot font-bold md:text-4xl">{t('Here is')} <span
                    className="text-orange-300">{t('my account')}</span>
                </h2>
                <h3 className="text-xl font-medium mb-10 pt-4">
                    {t('Modification of personal information')}

                </h3>
            </div>

            <div className="mt-20 container bg-white-background text-black-trot">

                {/* <ProductsList /> */}
                {(auth) ?
                    <Grid container spacing={2}>
                        <Grid item xs={4} className="text-[5]" alignItems="center" justifyContent="center">
                            <div className="flex flex-col space-y-3">
                                <NavLink
                                    className={selected("informations")}
                                    to="/account/informations">
                                    <i className="fab fa-facebook-square text-s leading-lg text-black-trot opacity-75"></i>
                                    <span className="duration-200 hover:text-black-trot">{t('Personnal information')}</span>
                                </NavLink>
                                <NavLink
                                    className={selected("password")}
                                    to="/account/password">
                                    <i className="fab fa-facebook-square text-s leading-lg text-black-trot opacity-75"></i>
                                    <span className="duration-200 hover:text-black-trot">{t('My password')}</span>
                                </NavLink>
                                <NavLink
                                    className={selected("subscriptions")}
                                    to="/account/subscriptions">
                                    <i className="fab fa-facebook-square text-s leading-lg text-black-trot opacity-75"></i>
                                    <span className="duration-200 hover:text-black-trot">{t('My subscriptions')}</span>
                                </NavLink>
                                <NavLink
                                    className={selected("purchases")}
                                    to="/account/purchases">
                                    <i className="fab fa-facebook-square text-s leading-lg text-white opacity-75"></i>
                                    <span className="duration-200 hover:text-orange-300">{t('My purchases')}</span>
                                </NavLink>
                                <NavLink
                                    className={selected("my-fidelity")}
                                    to="/account/my-fidelity">
                                    <i className="fab fa-facebook-square text-s leading-lg text-black-trot opacity-75"></i>
                                    <span className="duration-200 hover:text-black-trot">{t('My loyalty')}</span>
                                </NavLink>
                                <NavLink
                                    className={selected("delete")}
                                    to="/account/delete">
                                    <i className="fab fa-facebook-square text-s leading-lg text-black-trot opacity-75"></i>
                                    <span className="duration-200 hover:text-black-trot">{t('Delete')}</span>
                                </NavLink>
                            </div>
                        </Grid>

                        <Grid item xs={8}>
                            <Outlet />
                        </Grid>
                    </Grid>
                    :
                    <CircularProgress />
                }

            </div>
    </section>



        // <div className="rounded-3 bg-dark p-6 text-white">
        //     <p>Voici mon compte</p>
        //     {(auth) ? <Outlet/> : <CircularProgress/>}
        // </div>
    );
};

export default Account;
