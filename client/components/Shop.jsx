import React, {useState} from "react"
import Nav from "./subcomponents/Nav"
import { fetchShopItems } from "../api/shopItems"

export default function Shop() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    window.onload = (e) => {
        e.preventDefault()
        setTimeout(() => {
            fetchShopItems()
            .then((res) => {
                return setData(res)
            })
            .catch((err) => {
                console.trace()
                console.error(err)
            })
            setLoading(false)
        }, 2000);
    }
    console.log('component data: ', data)
    return(
        <>
        <h1>shop</h1>
        <Nav />
        {loading 
        ? <p>loading...</p>
        : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nemo magni natus esse soluta laboriosam libero odio illum, maxime vitae iure quibusdam, dolore eum delectus facere repellat. Similique, neque aliquid!</p>}
        
        </>
    )
}