import React, {useState, useMemo} from "react"
// import { useParams } from "react-router-dom"
// import { fetchShopItems } from "../../api/shopItems"
import { useLocation } from "react-router-dom"

export default function ShopItem() {
    const [product, setProduct] = useState({})

    if(product === {}) {
        const data = useLocation()
        console.log('from router state: ', data.state)
        localStorage.setItem('product', JSON.stringify(data.state))
    }

    useMemo(() => {
        const getData = JSON.parse(localStorage.getItem('product'))
        setProduct(getData)
    }, [])

    console.log('from local storage: ', product)
    // const [product, setProduct] = useState({})
    // const name = useParams()
    
    // useEffect(() => {
    //     fetchShopItems()
    //     .then((res) => {
    //         const data = res.find((x) => {
    //             console.log(x)
    //             return x.title == name.title
    //         })
    //         setProduct(data)
    //     })
    //     .catch((err) => {
    //         console.trace()
    //         console.error(err)
    //     })
    
    // }, [name])

    // console.log(product)

    //  at this point, the data no longer persists on refresh
    //  try putting the data into a new state to see if that fixes the issue, if its' saved in react state it might persist
    //  if not, consider using storage in the browser or a global state management library

    return(
        <>
        <p>test</p>
        </>
    )
}