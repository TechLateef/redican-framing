import React from "react"
import { useNavigate } from "react-router-dom"

export default function ShopContainer({data}) {

    const navigate = useNavigate();
    const products = [...data]

    function handleClick(e) {
        e.preventDefault()
        
        const findMatch = products.find((product) => {
            return product.valid_id == e.target.id || product.valid_id == e.target.parentNode.id
        })

        navigate(`/store/${findMatch.title}`, {state: findMatch})
    }
    
    return(
        <>
        <div>
        {products
        ? products.map((product) => {
            return(
                <>
                <div id={product.valid_id} onClick={handleClick}>
                    <img src={`images/shopItems/${product.img_filename}`} alt="product_image" className="product_image"></img>
                    <p>{product.title}</p>
                </div>
                </>)
            })
        :
            <>
            {/* This should be made into either an alert or a dynamic error component that could also be used elsewhere.
            Ideally, if there is a failure to retrieve the data on the first hit, the loader should be summoned and the fetch function should be called again. */}
                <h3>Oops! It looks like we are having problems loading our stock.</h3>
                <p>Refresh the page and try again, if the problem persists come check back in with us soon.</p>
            </>
            }
        </div>
        </>
    )
}