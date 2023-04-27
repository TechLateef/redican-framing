import React from "react"

export default function ShopContainer({data}) {

    const products = [...data]
    
    return(
        <>
        <div>
        {products
        ? products.map((product) => {
            console.log(product.img_filename)
            return(
                <>
                <div>
                    <img src={`images/shopItems/${product.img_filename}`} alt="product_image" className="product_image"></img>
                    <p>{product.title}</p>
                </div>
                </>)
            })
        :
            <>
                <h3>Oops! It looks like there we are having problems loading our stock.</h3>
                <p>Refresh the page and try again, if the problem persists come check back in with us soon.</p>
            </>
            }
        </div>
        </>
    )
}