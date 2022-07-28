import React, { ReactNode } from "react";
import Navbar from "../navbar/navbar-container";
import Header from "./Header";

type Props = {
  children?: ReactNode
  title?: string
  withNavbar?: boolean
} 

const LayoutContainer = ({ children, title = 'This is the default title', withNavbar = true }: Props) => {
  return(
    <div style={{overflowX: 'hidden', backgroundColor: '#111'}} className=''>
      <Header />
      {withNavbar && <Navbar />}
      {children}
    </div>
  )
}

export default LayoutContainer;