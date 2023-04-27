import React, {useState} from "react"
import Nav from "./subcomponents/Nav"
import ShopContainer from "./subcomponents/ShopContainer"
import { fetchShopItems } from "../api/shopItems"

export default function Shop() {
    const [data, setData] = useState([])
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
        
            if(data != []) {
                setLoading(false)
            }

        }, 2000);
    }

    return(
        <>
        <h1>shop</h1>
        <Nav />
        {loading 
        ? <p>loading...</p>
        : <ShopContainer data={data} />}
        </>
    )
}