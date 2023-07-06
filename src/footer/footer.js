import React from "react"

import { BsFacebook } from "react-icons/bs"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { BsPinterest } from "react-icons/bs"
import { FaSnapchat } from "react-icons/fa"

import "./footer.css"

export default function Footer() {
    return(
        <footer className="footer-container">
            <div className="connections-container">
                <h1 className="footer-title">Connect With Us</h1>
                <div className="connections-images-container">
                    <div className="connections-image">
                        <BsFacebook/>
                    </div>
                    <div className="connections-image">
                        <AiOutlineInstagram/>
                    </div>
                    <div className="connections-image">
                        <AiFillTwitterCircle/>
                    </div>
                    <div className="connections-image">
                        <AiFillYoutube/>
                    </div>
                    <div className="connections-image">
                        <BsPinterest/>
                    </div>
                    <div className="connections-image">
                        <FaSnapchat/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="links-container">
                <h1 className="footer-text">Contact Us</h1>
                <h1 className="footer-text">About</h1>
                <h1 className="footer-text">Help</h1>
            </div>
        </footer>
    )
}