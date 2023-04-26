import request from "superagent"

export function fetchShopItems() {
    return request
    .get('/api/v1/shop')
    .then((res) => {
        return res.body.products
    })
    .catch((err) => {
        console.trace()
        console.error(err)
    })
}