import Header from "./header/Header";
import Footer from "./footer/Footer";


import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router";
import AuthProvider from "./context/AuthContext";
import CartProvider from "./context/CartContext";


const MainApp = () => {
    /*let [token, setToken] = useState()
     useEffect(() => {
     let bearer = localStorage.getItem('apiBearerToken')
     if (bearer) {
     console.log("on y est et il est de " + bearer)
     setToken(bearer)
     axios.defaults.headers.common['Authorization'] = `Bearer ${bearer}`
     }
     }, [])*/

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                light: "#FF9900",
                main: "#FF9900",
                dark: "#FF9900",
                contrastText: "#FF9900"
            },
            secondary: {
                light: "#FF9900",
                main: "#FF9900",
                dark: "#FF9900",
                contrastText: "#FF9900"
            }
        }
    });

    return (
        <AuthProvider>
            <CartProvider>
                <ThemeProvider theme={darkTheme}>
                    <div id="scrolling-box" className="bg-white-background">
                        <Header />
                        {/* <Container className="py-4 flex justify-center w-full"> */}
                        <Outlet />

                        <Footer />

                        {/*                       </Container> */}

                    </div>
                </ThemeProvider>
            </CartProvider>
        </AuthProvider>
    );
};

export default MainApp;

