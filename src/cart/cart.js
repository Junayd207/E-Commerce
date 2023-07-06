import React, { useState, useContext } from "react"
import "./cart.css"

import { Context } from "../Context"
import CartItem from "./cartItem"

export default function Cart(){
    const [buttonText, setButtonText] = useState("Place Order")
    const {cartItems, emptyCart} = useContext(Context)
    console.log(cartItems)

    const cartItemElements = cartItems.map(item => (
        <CartItem id={item.id} item={item}/>
    ))

    const total = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price
    }, 0)

    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }

    return (
        <div className="cart-page">
            <h1 className="checkout-text">My Cart</h1>
            {cartItemElements}
            {cartItems.length ? <h1 className="price-text">Total: £{total}/M</h1> : <></>}
            {!cartItems.length ? <h1 className="empty-text">Your Basket Is Empty</h1> : <></>}
            {cartItems.length ? <button className="order-button" onClick={placeOrder}>{buttonText}</button> : <></>}
        </div>
    )
}
