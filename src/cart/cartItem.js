import React, { useContext } from "react"
import { Context } from "../Context"
import useHover from "../useHover"
import "./cartItem.css"

import { IconContext } from "react-icons";
import { ImBin } from "react-icons/im";

export default function CartItem({item}) {
    const [hovered, ref] = useHover()
    const {removeFromCart} = useContext(Context)

    return(
        <div className="cart-item">
            <div ref={ref} className="bin-container" onClick={() => removeFromCart(item.id)}>
                <IconContext.Provider value={{ color: hovered ? "gray" : "black"}}>
                    <ImBin/>
                </IconContext.Provider>
            </div>
            <img  className="cart-item-image" src={item.src}/>
            <h1 className="cart-item-name">{item.name}</h1>
            <h2 className="cart-item-price">£{item.price}/M</h2>
        </div>
    )
}
