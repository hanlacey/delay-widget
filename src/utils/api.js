import axios from "axios"
import token from './key.js'

const request = axios.create({
    baseURL: "https://api.tfl.gov.uk"
})



export const getAllStatuses = () => {
    return request.get(`/Line/Mode/tube/Status`,
        {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
        .then(({ data }) => {
            return data
        })
}
