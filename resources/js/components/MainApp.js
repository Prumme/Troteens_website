import Header from "./header/Header";
import React from "react";
import {Container, createTheme, ThemeProvider} from "@mui/material";
import {Outlet} from "react-router";
import AuthProvider from "./context/AuthContext";


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
            mode: 'dark',
        },
    })

    return (
        <AuthProvider>
                <ThemeProvider theme={darkTheme}>
                    <div className="bg-black-trot h-full w-full">
                        <Header/>
                        <Container componen={'main'} className={' py-4 '}>
                            <Outlet/>
                        </Container>
                    </div>
                </ThemeProvider>
        </AuthProvider>
    )
}

export default MainApp

