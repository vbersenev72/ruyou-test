import jwt from 'jsonwebtoken'
import { authsecret } from '../../config.js'


export default (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: 'Auth error' })
        }
        const decoded = jwt.verify(token, authsecret)

        req.user = decoded
        next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Auth error' })
    }
}