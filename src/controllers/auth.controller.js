import db from '../models/index.js'
import bcrypt from 'bcryptjs'
import generateJwt from '../helpers/generateJwt.js'


const Users = db.users

class UserController {
    async register(req, res) {
        try {

            const { name, login, password } = req.body

            if (!name || !login || !password) return res.status(400).json({ message: 'name/login/pass must be non-empty' })

            const candidate = await Users.findOne({
                where: {
                    name: name
                }
            })

            if (candidate) {
                return res.status(400).json({ message: "user already registered" })
            }

            const hashPassword = await bcrypt.hash(password, 5)
            let user = await Users.create({
                name,
                login,
                password: hashPassword,
            })

            const token = generateJwt(user.id)
            return res.json({ token, message: 'successfully registered' })


        } catch (error) {
            console.log(error);
            return req.status(400).json({ message: 'register error' })
        }
    }

    async login(req, res) {
        try {

            const { login, password } = req.body

            const candidate = await Users.findOne({ where: { login: login } })
            if (!candidate) {
                return res.status(404).json({ message: "User not found" })
            }
            const isPassValid = bcrypt.compareSync(password, candidate.password)
            if (!isPassValid) {
                return res.status(400).json({ message: "Invalid password" })
            }
            const token = generateJwt(candidate.id)
            return res.json({
                token,
            })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: "error", error })
        }

    }

    async auth(req, res) {
        try {

        } catch (error) {

        }
    }
}


export default new UserController()