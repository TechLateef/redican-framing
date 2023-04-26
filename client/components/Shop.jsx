import React from "react"
import Nav from "./subcomponents/Nav"
import { fetchShopItems } from "../api/shopItems"

export default function Shop() {
    window.onload = async (e) => {
        e.preventDefault()
        const data = await fetchShopItems()
        console.log('component data: ', data)
    }
    return(
        <>
        <h1>shop</h1>
        <img src="images/thumbnails/logo.jpg" alt="logo" className="logo"></img>
        <Nav />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo magni natus esse soluta laboriosam libero odio illum, maxime vitae iure quibusdam, dolore eum delectus facere repellat. Similique, neque aliquid!</p>
        </>
    )
}