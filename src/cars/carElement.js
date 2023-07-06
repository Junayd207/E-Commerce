import React, { useContext } from "react"

import { IconContext } from "react-icons"
import { BsFillCartPlusFill } from "react-icons/bs"
import { BsFillCartDashFill } from "react-icons/bs"

import { Context } from "../Context"
import UseHover from "../useHover"
import "./cars.css"

export default function CarElement({car}){
    const [hovered, ref] = UseHover()
    const {addToCart, removeFromCart, cartItems} = useContext(Context)
    console.log(cartItems)
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === car.id)
        if(alreadyInCart){
            return(
                <div onClick={() => removeFromCart(car.id)} className="add-to-cart-container">
                    <IconContext.Provider value={{ color: "black", size:"30px" }}>
                        <BsFillCartDashFill/>
                    </IconContext.Provider>
                </div>
            )
        }
        if(hovered) {
            return(
                <div onClick={() => addToCart(car)} className="add-to-cart-container">
                    <IconContext.Provider value={{ color: "black", size:"30px" }}>
                        <BsFillCartPlusFill/>
                    </IconContext.Provider>
                </div>
            )
        }
    }

    return(
        <div className="car-container" ref={ref}>
            <div className="car-title-container">
                <h2 className="car-title">{car.name}</h2>
                {cartIcon()}
            </div>
            <img src={car.src} className="car-image"/>
            <h1 className="car-price">£{car.price}/M</h1>
        </div>
    )
}
