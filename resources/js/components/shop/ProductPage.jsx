import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ACTIONS, CartContext } from "../context/CartContext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Product = () => {

    let { dispatch } = useContext(CartContext);

    const addToCart = (id) => {
        dispatch({ type: ACTIONS.CART_ADD_UNIQUE, payload: { id: id } });
    };


    const { id } = useParams();

    const [product, setProduct] = useState([]);

    const retrieveProductInfos = async () => {
        let response = await axios.get(`/api/product/${id}`);

        if (response.data.success) {
            setProduct(response.data.data);
        }
    };

    useEffect(() => {

        retrieveProductInfos();
    }, []);
    if (product)
        return (

            <section className="bg-white-background">
                <div className="flex mt-5 ml-5">
                    <NavLink to="/shop" style={{ color: "black", textDecoration: "none !important" }}>
                        <div className="align-bottom">
                            <ArrowBackIosNewIcon className="leading-none align-baseline"
                                                 style={{ color: "black", textDecoration: "none !important" }}
                                                 fontSize="large" />
                            <h1 className="font-bold uppercase text-2xl mb-5 leading-none align-baseline">Retour</h1>
                        </div>
                    </NavLink>
                </div>

                <div className="py-16 bg-green-50 mt-12 pt-5 ">
                    <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
                        <div className="gap-16 md:text-left md:flex mb-5">
                            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-7/12 lg:w-6/12 mr-6 pr-12">
                                <h1 className="font-bold uppercase text-3xl mb-5">{product?.name}
                                </h1>
                                <p className="text-lg text-gray-600">{product?.description}</p>
                                <div className="align-bottom">
                                    <span
                                        className="font-bold text-5xl leading-none align-baseline pt-2">{product?.price}</span>
                                    <span className="font-bold text-5xl leading-none align-baseline pl-2">€</span>

                                </div>
                                <div className="flex flex-wrap justify-center gap-4 lg:gap-6 md:justify-start">
                                    <button
                                        onClick={() => addToCart(product?.id)}
                                        className="bg-orange-300 opacity-75 hover:opacity-100 text-black-trot px-10 py-2 font-semibold">
                                        <i className="mdi mdi-cart -ml-2 mr-2"></i>
                                        Ajouter au panier
                                    </button>
                                </div>
                            </div>
                            <img src={"/" + product.image_path} width="400" height="400"
                                 className="md:w-5/12 m-auto" alt="mobility_illustration" />
                        </div>
                    </div>
                </div>


                <div className="py-16">
                    <div className="container px-2 text-gray-500 md:px-2 xl:px-12">
                        <div className="mx-auto grid ml-2 gap-12 md:w-4/4 lg:w-full lg:grid-cols-3">
                            <div className="bg-white rounded-2xl mr-4 ml-4 px-8 py-12 mb-5 sm:px-12 lg:px-8">
                                <div className="mb-12 space-y-4">
                                    <h3 className="text-2xl font-semibold text-black-trot">Retour gratuit</h3>
                                    <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                                        cum,
                                        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi
                                        officiis.</p>
                                </div>
                                <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
                                     className="w-2/3 ml-auto mb-4" alt="illustration" loading="lazy" width="900"
                                     height="600" />
                            </div>
                            <div className="bg-white rounded-2xl mr-4 ml-4 px-8 py-12 mb-5 sm:px-12 lg:px-8">
                                <div className="mb-12 space-y-4">
                                    <h3 className="text-2xl font-semibold text-black-trot">Made in France</h3>
                                    <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                                        cum,
                                        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi
                                        officiis.</p>
                                </div>
                                <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg"
                                     className="w-2/3 ml-auto mb-4" alt="illustration" loading="lazy" width="900"
                                     height="600" />
                            </div>
                            <div className="bg-white rounded-2xl mr-4 ml-4 px-8 py-12 mb-5 sm:px-12 lg:px-8">
                                <div className="mb-12 space-y-4">
                                    <h3 className="text-2xl font-semibold text-black-trot">Livraison rapide &
                                        gratuite </h3>
                                    <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at
                                        cum,
                                        consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi
                                        officiis.</p>
                                </div>
                                <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg"
                                     className="w-2/3 ml-auto mb-4 " alt="illustration" loading="lazy" width="900"
                                     height="600" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
};

export default Product;
