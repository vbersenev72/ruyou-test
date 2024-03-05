import { authsecret } from "../../config.js"
import jwt from "jsonwebtoken"

const generateJwt = (id) => {
    return jwt.sign(
        { id },
        authsecret,
        { expiresIn: '72h' }
    )
}

export default generateJwt