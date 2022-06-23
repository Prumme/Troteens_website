import Header from "../header/Header";
import React from "react";
import {Container, createTheme, ThemeProvider} from "@mui/material";
import {Outlet} from "react-router";
import AuthProvider from "../context/AuthContext";


const GestionApp = () => {

       return (

        <section className="full bg-black-trot">


            <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative pt-2">
                <div className="flex items-start justify-between">
                    <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
                        <div className="bg-white h-full rounded-2xl dark:bg-gray-700">

                            <nav className="mt-6">
                                <div>
                                    <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
                                       href="#">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                    </span>
                                        <span className="mx-4 text-sm font-normal">
                                        Gestion des trotinettes
                                    </span>
                                    </a>
                                    <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                                       href="#">
                                    <span className="text-left">
                                        <svg width="20" height="20" fill="currentColor" className="m-auto"
                                             viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                            </path>
                                        </svg>
                                    </span>
                                        <span className="mx-4 text-sm font-normal">
                                        Gestion des utilisateurs
                                    </span>
                                    </a>

                                    <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                                       href="#">
                                    <span className="text-left">
                                    <svg width="20" height="20" fill="currentColor" className="m-auto"
                                         viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z">
                                            </path>
                                        </svg>
                                    </span>
                                        <span className="mx-4 text-sm font-normal">
                                        Reports
                                    </span>
                                    </a>
                                    <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                                       href="#">
                                    <span className="text-left">
                                        <svg width="20" fill="currentColor" height="20" className="h-5 w-5"
                                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                            </path>
                                        </svg>
                                    </span>
                                        <span className="mx-4 text-sm font-normal">
                                        Settings
                                    </span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="flex flex-col flex-wrap sm:flex-row ">

                                <div className="w-full sm:w-1/2 xl:w-1/3">
                                    <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
                                        <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                                            <p className="font-bold text-md p-4 text-black dark:text-white">
                                                My Tasks
                                                <span
                                                    className="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
                                                    (05)
                                                </span>
                                            </p>
                                            <ul>
                                                <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            01
                                                        </span>
                                                        <span>
                                                            Create wireframe
                                                        </span>
                                                    </div>
                                                    <svg width="20" height="20" fill="currentColor"
                                                         className="mx-4 text-gray-400 dark:text-gray-300"
                                                         viewBox="0 0 1024 1024">
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor">
                                                        </path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            02
                                                        </span>
                                                        <span>
                                                            Dashboard design
                                                        </span>
                                                        <span
                                                            className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                            3
                                                            <svg width="15" height="15" fill="currentColor"
                                                                 className="ml-1" viewBox="0 0 512 512">
                                                                <path
                                                                    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                                                    fill="currentColor">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        <span
                                                            className="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                                                            3
                                                            <svg width="15" height="15" className="ml-1"
                                                                 fill="currentColor" viewBox="0 0 384 512">
                                                                <path
                                                                    d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                                                                    fill="currentColor">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <svg width="20" height="20" fill="currentColor"
                                                         className="mx-4 text-gray-400 dark:text-gray-300"
                                                         viewBox="0 0 1024 1024">
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor">
                                                        </path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            03
                                                        </span>
                                                        <span>
                                                            Components card
                                                        </span>
                                                        <span
                                                            className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                            3
                                                            <svg width="15" height="15" fill="currentColor"
                                                                 className="ml-1" viewBox="0 0 512 512">
                                                                <path
                                                                    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                                                    fill="currentColor">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <svg width="20" height="20" fill="currentColor"
                                                         className="mx-4 text-gray-400 dark:text-gray-300"
                                                         viewBox="0 0 1024 1024">
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor">
                                                        </path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            04
                                                        </span>
                                                        <span className="line-through">
                                                            Google logo design
                                                        </span>
                                                    </div>
                                                    <svg width="20" height="20" fill="currentColor"
                                                         viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                                                            fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center text-gray-400  justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            05
                                                        </span>
                                                        <span className="line-through">
                                                            Header navigation
                                                        </span>
                                                    </div>
                                                    <svg width="20" height="20" fill="currentColor"
                                                         viewBox="0 0 1024 1024" className="text-green-500 mx-4">
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                                                            fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            06
                                                        </span>
                                                        <span>
                                                            International
                                                        </span>
                                                        <span
                                                            className="lg:ml-6 ml-2 flex items-center text-gray-400 dark:text-gray-300">
                                                            3
                                                            <svg width="15" height="15" fill="currentColor"
                                                                 className="ml-1" viewBox="0 0 512 512">
                                                                <path
                                                                    d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2l-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29c7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1l-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160s-93.3 160-208 160z"
                                                                    fill="currentColor">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        <span
                                                            className="mx-4 flex items-center text-gray-400 dark:text-gray-300">
                                                            3
                                                            <svg width="15" height="15" className="ml-1"
                                                                 fill="currentColor" viewBox="0 0 384 512">
                                                                <path
                                                                    d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8c-.6 16.1-4.2 28.5-11 36.9c-15.4 19.2-49.3 22.4-85.2 25.7c-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3c0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6c3.1-5.2 7.8-9.8 14.9-13.4c16.2-8.2 40.4-10.4 66.1-12.8c42.2-3.9 90-8.4 118.2-43.4c14-17.4 21.1-39.8 21.6-67.9c31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16s16 7.2 16 16s-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16s-16-7.2-16-16s7.2-16 16-16z"
                                                                    fill="currentColor">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <svg width="20" height="20" fill="currentColor"
                                                         className="mx-4 text-gray-400 dark:text-gray-300"
                                                         viewBox="0 0 1024 1024">
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor">
                                                        </path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </li>
                                                <li className="flex items-center text-gray-600 dark:text-gray-200 justify-between py-3">
                                                    <div className="flex items-center justify-start text-sm">
                                                        <span className="mx-4">
                                                            07
                                                        </span>
                                                        <span>
                                                            Production data
                                                        </span>
                                                    </div>
                                                    <svg width="20" height="20" fill="currentColor"
                                                         className="mx-4 text-gray-400 dark:text-gray-300"
                                                         viewBox="0 0 1024 1024">
                                                        <path
                                                            d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                                                            fill="currentColor">
                                                        </path>
                                                        <path
                                                            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                                                            fill="currentColor">
                                                        </path>
                                                    </svg>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 xl:w-1/3">


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </main>


        </section>


       )
}

export default GestionApp

