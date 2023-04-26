import request from 'superagent'

const rootUrl = 'api/v1'

export default function getGallery() {
  return request
    .get(rootUrl + '/gallery')
    .then((res) => {
      return res.body
    })
    .catch((err) => {
      console.error(err.message)
    })
}
