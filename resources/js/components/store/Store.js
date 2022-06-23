import React from "react";
import {useTranslation} from 'react-i18next';


function Store() {

    const {t, i18n} = useTranslation();


    const packages = [
        {
            id: 1,
            price: 19.99,
            name: 'basique',
            student_offer: false,
            cycle: 'jour'
        },
        {
            id: 2,
            price: 44.99,
            name: 'deluxe',
            student_offer: true,
            cycle: 'mois'
        },
        {
            id: 3,
            price: 79.99,
            name: 'premium',
            student_offer: false,
            cycle: 'mois'
        }
    ]

    const handleClick = async (name) => {
        try {
            let response = await axios.post('/api/checkout-sub', {name});
            if (response.data.data) {
                console.log(response.data.data)
                if(response.data.data.redirect){
                    window.location.replace(response.data.data.redirect)
                }
            }
        } catch
            (e)
            {
                if (e.request) {
                    console.log(e.request)
                }
                if (e.message) {
                    console.log(e.message)
                }
            }
        }
        return (
            <section className="full_responsive mt-10">
                <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">
                    <div className="m-auto text-center lg:w-7/12 mb-10">
                        <h2 className="text-2xl text-black-trot font-bold md:text-4xl">{t('Our')} <span
                            className="text-orange-300">Abonnements</span></h2>
                        <h3 className="text-xl font-medium pb-15 mt-5">
                            Fidélisez-vous à EasyScooter pour profiter d'offres plus avantageuses
                        </h3>
                    </div>
                    <div className="mt-24 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
                        {packages.map(({ id, price, student_offer, cycle, name }) => (
                            <div key={id} className="relative md:col-span-1 group lg:w-[32%]">
                                <div aria-hidden="true"
                                     className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                                <div className="relative p-6 space-y-6">
                                    <h3 className="text-3xl text-gray-700 font-semibold text-center">{name}</h3>
                                    <div className="relative flex justify-around">
                                        <div className="flex">
                                            <span
                                                className="-ml-6 mr-2 mt-2 text-3xl text-orange-300 font-bold">€</span>
                                            <span className="text-5xl text-gray-800 font-bold leading-0">{price}</span>
                                        </div>
                                        <span
                                            className="absolute right-12 bottom-2 text-xl text-orange-300 font-bold">/{cycle}</span>
                                    </div>
                                    <span
                                        className="block uppercase text-xs text-orange-300 text-center pb-1">{student_offer ? "Offre étudiante" : ""}</span>

                                    <ul role="list" className="w-max space-y-4 pb-6 m-auto text-gray-600">
                                        <li className="space-x-2">
                                            <span className="text-orange-300 font-semibold">-</span>
                                            <span>First premium advantage</span>
                                        </li>
                                        <li className="space-x-2">
                                            <span className="text-orange-300 font-semibold">-</span>
                                            <span>Second premium advantage</span>
                                        </li>
                                        <li className="space-x-2">
                                            <span className="text-orange-300 font-semibold">-</span>
                                            <span>Third advantage</span>
                                        </li>
                                    </ul>
                                    <button onClick={() => {
                                        handleClick(name);
                                    }} type="submit" title="Submit"
                                            className="block w-full py-3 px-6 text-center rounded-xl transition bg-orange-300 hover:bg-orange-600 active:bg-orange-700 focus:bg-orange-500">
                        <span className="text-white font-semibold">
                            Start plan
                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
}

export default Store;

{/* <div className="text-center text-2xl font-medium">
 <span className="text-gray-400 line-through">$234</span>
 <span className="text-gray-700 font-semibold">$190</span>
 </div>
 <span className="block uppercase text-xs text-cyan-500 text-center">BILLED YEARLY</span>
 <span className="block w-max mt-4 m-auto px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-pink-300 text-sm font-medium text-yellow-900">1 Discount applied</span> */
}
