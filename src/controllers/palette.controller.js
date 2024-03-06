import db from '../models/index.js'
import paletteModel from '../models/palette.model.js'

const Palette = db.palette


class PaletteController {

    async createPalette(req, res) {
        try {

            const id = req.user.id
            const { namePalette } = req.body

            const candidate = await Palette.findOne({
                where: {
                    user_id: id,
                    name: namePalette
                }
            })

            if (candidate) return res.status(400).json({ message: 'palette name is already used' })

            const create = await Palette.create({
                name: namePalette,
                user_id: id
            })

            return res.json({ palette: create, message: 'created successfully' })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }

    async getPaletteById(req, res) {
        try {

            const id = req.user.id
            const paletteId = req.params.id

            const candidate = await Palette.findOne({
                where: {
                    id: paletteId,
                    user_id: id
                }
            })

            if (!candidate) return res.status(400).json({ message: 'palette is not defined' })

            return res.json({ palette: candidate, message: 'ok' })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }

    async updatePalette(req, res) {
        try {

            const id = req.user.id
            const { namePalette, paletteId } = req.body

            const candidate = await Palette.findOne({
                where: {
                    id: paletteId,
                    user_id: id
                }
            })

            if (!candidate) return res.status(400).json({ message: 'palette is not defined' })

            const update = await Palette.update({
                name: namePalette,
            }, {
                where: {
                    id: paletteId,
                    user_id: id
                }
            })


            return res.json({ message: 'successfully updated' })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }

    async deletePalette(req, res) {
        try {

            const id = req.user.id
            const paletteId = req.params.id

            const candidate = await Palette.findOne({
                where: {
                    id: paletteId,
                    user_id: id
                }
            })

            if (!candidate) return res.status(400).json({ message: 'palette is not defined' })

            const deletePalette = await Palette.destroy({where: {
                id: paletteId,
                user_id: id
            }})

            return res.json({message: 'deleted succesfully'})

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }

    async getAllByUser(req, res) {
        try {

            const id = req.user.id

            const findAllPalette = await Palette.findAll({where: {
                user_id: id
            }})

            return res.json({palette: findAllPalette, message: 'ok'})

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }
}


export default new PaletteController()