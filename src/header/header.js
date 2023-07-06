import React, { useContext } from "react"
import "./header.css"
import { Context } from "../Context"
import { Link } from "react-router-dom"

import { IoCart } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BsFillCarFrontFill } from "react-icons/bs";

export default function Header() {
    const {cartItems} = useContext(Context)
    const cartIcon = cartItems.length > 0 ? <IoCart/> : <IoCartOutline/>

    return(
        <header>
            <div className="header-container">
                <div className="header-logo">
                    <div className="header-car">
                        <BsFillCarFrontFill/>
                    </div>
                    <div className="header-column">
                        <h1 className="header-heading">Fastway Motors</h1>
                        <h4 className="header-subheading">Renting Sports Cars</h4>
                    </div>
                </div>
                <div className="header-title-container">
                    <Link to="/">
                        <h1 className="header-title">Home</h1>
                    </Link>
                </div>
                <div className="header-cart-icon-container">
                    <Link to="/cart">
                        <div className="cart-icon-container">
                            {cartIcon}
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}