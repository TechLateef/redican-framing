import React from "react"
import { useLocation } from "react-router-dom"

export default function ShopItem() {
    const data = useLocation()
    console.log(data.state)
    
    return(
        <>
        <p>test</p>
        </>
    )
}