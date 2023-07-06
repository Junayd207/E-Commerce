import React, { useState } from "react"
import cars from "./carData"
import CarElement from "./carElement"
import cartoonCar from "../images/cartoon-car.jpg"
import "./cars.css"

export default function Cars(){
    const [sort, setSort] = useState("Default")
    const [filter, setFilter] = useState("All")

    let filtered = cars.filter(car => filter === "All" ? car : car.model === filter)
    filtered = filtered.sort((a,b) => {
        if(sort === "default"){
            return 1
        }
        else if(sort === "AtoZ"){
            if(a.model < b.model){
                return -1
            }
            if(a.model > b.model){
                return 1
            }
        }
        else if(sort === "ZtoA"){
            if(a.model < b.model){
                return 1
            }
            if(a.model > b.model){
                return -1
            }
        }
        else if(sort === "lowToHigh"){
            return a.price - b.price
        }
        else if(sort === "highToLow"){
            return b.price - a.price
        }
    });

    const carElements = filtered.map(car => (
        <CarElement car={car} key={car.id}/>
    ))

    return (
        <div className="hero-container">
            <div className="subheader-container">
                <div className="subheader-text-container">
                    <h1 className="subheader-text">Unleash Your Inner Speed Demon with Our Exhilarating Fleet of High-Performance Sports Cars</h1>
                    <h4 className="subheader-subtext">We help you rent your dream car easily, quickly and we are always reliable</h4>
                </div>
                <img className="subheader-image" src={cartoonCar}/>
            </div>
            <div>
                <div className="filters-sort-container">
                    <div className="sort-container">
                        <h1 className="sort-text">Sort By</h1>
                        <select className="sort-choice" value={sort}
                            onChange={(event) => {setSort(event.target.value)}}
                        >
                            <option value="Default">Default</option>
                            <option value="AtoZ">Model (A to Z)</option>
                            <option value="ZtoA">Model (Z to A)</option>
                            <option value="lowToHigh">Price (Low to High)</option>
                            <option value="highToLow">Price (High to Low)</option>
                        </select>
                    </div>
                    <div className="filter-container">
                        <h1 className="filter-text">Filter</h1>
                        <select className="filter-choice" value={filter}
                            onChange={(event) => {setFilter(event.target.value)}}
                        >
                            <option value="All">All</option>
                            <option value="Audi">Audi</option>
                            <option value="Bmw">Bmw</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Dodge">Dodge</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Mclaren">Mclaren</option>
                            <option value="Mercedes">Mercedes</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Shelby">Shelby</option>                        
                        </select>
                    </div>
                </div>
                <div className="cars-grid">
                    {carElements}
                </div>
            </div>
        </div>
    )
}
