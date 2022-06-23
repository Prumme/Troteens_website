import "../../css/app.css";
import React from "react";
import Header from "./header/Header"


export default function App() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <section id="firstSection" className="">

          <Header />

          <div
              className="mt-40 md:mt-40 bg-black-trot md:bg-transparent flex flex-col md:flex-row flex-nowrap justify-between items-center pb-10 md:pb-0"
              onClick={() => setShowModal(false)}>
              <div id="Left" className="">
                  <img id="img" src="images/Frame 2.png"></img>
              </div>

              <div className="flex flex-col justify-center ">
                  <div className="w-min whitespace-nowrap px-6">
                      <a
                          className="no-underline text-4xl md:text-7xl font-bold leading-relaxed inline-block mr-1 py-2 whitespace-nowrap uppercase text-white"
                          href="#pablo"
                      >
                          Easy
                      </a>
                      <a
                          id="OrangePaper"
                          className="no-underline text-4xl md:text-7xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                          href="#pablo"
              >
                Scooter
              </a>
            </div>

                  <div id="Slogan" className="text-white text-lg px-6 md:px-6">
                      <p>
                          Depuis 2012, Easy Scooter est la première société à proposer la
                          location de trottinettes électriques à Lyon avec des offres
                          diversifiées, capables de répondre à toutes sortes de demandes !
                      </p>
                  </div>

                  <div className="px-6 md:px-6">
                      <button
                          id="buttonOrange"
                          className="mt-10 font-bold py-2 px-8 rounded inline-flex items-center"
                      >
                          <span>Télécharger l'Application </span>
                      </button>
                  </div>

            <div></div>
          </div>


        </div>
      </section>


      {/* <section></section> */}



      {showModal ? (
        <>

          <div
            className="opacity-70 fixed inset-0 z-40 bg-black"
            onClick={() => setShowModal(false)}
          ></div>

            <div
                tabIndex="-5"
                aria-hidden="true"
                className="overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full flex justify-center items-center"

            >
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-end p-2">
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                                data-modal-toggle="authentication-modal"
                                onClick={() => setShowModal(false)}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <form
                    className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                    action="#"
                >
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Inscription 🥺{" "}
                    </h3>
                    <div>
                        <label
                            for="secondname"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Nom
                        </label>
                        <input
                            type="text"
                            name="secondname"
                            id="secondname"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                    ></input>
                  </div>
                  <div>
                    <label
                        for="firstname"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Prénom
                    </label>
                    <input
                        type="email"
                        name="firstname"
                        id="firstname"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    ></input>
                  </div>
                  <div>
                    <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Votre email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                    ></input>
                  </div>
                  <div>
                    <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Mot de passe
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                    ></input>
                  </div>
                  <div>
                    <label
                        for="passwordconfirmation"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Confirmer mot de passe
                    </label>
                      <input
                          type="password"
                          name="passwordconfirmation"
                          id="passwordconfirmation"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          required
                      ></input>
                  </div>
                    <div className="flex justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                    required
                                ></input>
                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    for="remember"
                                    className="font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Se souvenir de moi
                                </label>
                            </div>
                    </div>
                    <a
                        id="OrangePaper"
                        href="#"
                        className="text-sm hover:underline dark:text-blue-500"
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                    <button
                        id="buttonOrange"
                        type="submit"
                        className="w-full text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Créer votre compte
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Déjà un compte?{" "}
                        <a
                            id="OrangePaper"
                            href="#"
                            className="hover:underline dark:text-blue-500"
                        >
                            Connecte-toi
                        </a>
                    </div>
                </form>
              </div>
            </div>
          </div>

        </>
      ) : null}
    </>
  );
}
