import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { GlobalStyle } from "../styles/GlobalStyle"
import { Typography } from "../styles/Typography"
import Header from '../layout/header'
import Footer from "./footer"



function Layout({ children }) {

  
  return (
    <>
      <Normalizer />
      <Typography />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}


export default Layout