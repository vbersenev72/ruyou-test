import axios from "axios"


export default async function (hex) {
    try {

        const response = await axios.get(`https://www.thecolorapi.com/id?hex=${hex}`)

        return response.data


    } catch (error) {
        return false
    }
}