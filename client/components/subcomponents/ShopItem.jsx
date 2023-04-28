import React, {useState, useEffect} from "react"
import { useLocation } from "react-router-dom"

export default function ShopItem() {
    const [product, setProduct] = useState({})
    const data = useLocation()
    
    useEffect(() => {
        setProduct(data.state)
    }, [])

    console.log('location data: ', product)

    //  at this point, the data no longer persists on refresh
    //  try putting the data into a new state to see if that fixes the issue, if its' saved in react state it might persist
    //  if not, consider using storage in the browser or a global state management library

    return(
        <>
        <p>test</p>
        </>
    )
}