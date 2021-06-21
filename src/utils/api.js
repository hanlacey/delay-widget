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

export const getStatusDescriptionById = (id) => {
    return request.get(`/Line/${id}/Status`,
        {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
        .then(({ data }) => {
            const description = data[0].lineStatuses[0].reason
            const { name } = data[0]

            return description ? description : `There are currently no reported disruptions on the ${name} line.`
        })
}