import React from "react"
import Header from "../../mainComponents/Header"
import Footer from "../../mainComponents/Footer"
import '../../styles/Theme.css'
import './Layout.css'

function Layout({children}) {
    return(
        <>
            <Header/>
                <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout