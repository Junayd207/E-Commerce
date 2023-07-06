import React from "react"
import { Routes, Route } from "react-router-dom"

import Header from "./header/header"
import Cars from "./cars/cars"
import Cart from "./cart/cart"
import Footer from "./footer/footer"
import './App.css'

function App() {
    return (
        <main>
            <Header/>
            <Routes>
                <Route path="/" element={<Cars/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
            <Footer/>
        </main>
    )
}

export default App;
