import getColorNameByHex from "../helpers/getColorNameByHex.js";
import db from "../models/index.js";

const Color = db.color
const Palette = db.palette

class ColorController {
    async createColor(req, res) {
        try {

            const id = req.user.id
            let { colorHex, paletteId, } = req.body
            let colorName

            if (!colorHex || !paletteId) return res.status(400).json({ message: 'colorHex/paletteId must be non-empty' })

            const paletteCandidate = await Palette.findOne({
                where: {
                    id: paletteId,
                    user_id: id
                }
            })

            if (!paletteCandidate) return res.status(400).json({ message: 'palette is not defined or does it not belong to you' })

            await getColorNameByHex(colorHex).then((data) => {
                colorName = data.name.value
                colorHex = data.hex.value
            })

            const create = await Color.create({
                name: colorName,
                id_palette: paletteId,
                hex: colorHex
            })

            return res.json({ color: create, message: 'succesfully created' })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }

    async deleteColor(req, res) {
        try {

            const id = req.user.id
            const { colorId, paletteId } = req.body

            const paletteCandidate = await Palette.findOne({
                where: {
                    id: paletteId,
                    user_id: id
                }
            })

            if (!paletteCandidate) return res.status(400).json({ message: 'palette is not defined or does it not belong to you' })


            const findColor = await Color.findOne({
                where: {
                    id: colorId,
                    id_palette: paletteCandidate.id
                }
            })
            if (!findColor) return res.status(400).json({ message: 'color is not defined' })

            const deleteColor = await Color.destroy({
                where: {
                    id: colorId,
                    id_palette: paletteCandidate.id
                }
            })

            return res.json({ message: 'succesfully deleted' })


        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }

    async updateColor(req, res) {
        try {

            const id = req.user.id
            let { colorId, colorHex,  } = req.body
            let colorName

            if (!colorId) return res.status(400).json({ message: 'colorId must be non-empty' })

            const color = await Color.findOne({
                where: {
                    id: colorId,
                }
            })

            const paletteFind = await Palette.findOne({
                where: {
                    user_id: id,
                    id: color.id_palette
                }
            })

            if (!paletteFind) return res.status(400).json({ message: 'color is not defined or does it not belong to you' })

            await getColorNameByHex(colorHex).then((data) => {
                colorName = data.name.value
                colorHex = data.hex.value
            })

            const update = await Color.update({
                name: colorName,
                hex: colorHex
            }, {
                where: {
                    id: colorId,
                }
            })

            return res.json({  message: 'succesfully updated' })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }

    async getAllByPaletteId(req, res) {
        try {

            const id = req.user.id
            const paletteId = req.params.id

            const paletteCandidate = await Palette.findOne({
                where: {
                    id: paletteId,
                    user_id: id
                }
            })

            if (!paletteCandidate) return res.status(400).json({ message: 'palette is not defined or does it not belong to you' })

            const colors = await Color.findAll({
                where: {
                    id_palette: paletteId
                }
            })

            return res.json({ colors: colors, message: 'ok' })




        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }

    async getOneById(req, res) {
        try {

            const id = req.user.id
            const colorId = req.params.id

            const color = await Color.findOne({
                where: {
                    id: colorId,
                }
            })

            const paletteFind = await Palette.findOne({
                where: {
                    user_id: id,
                    id: color.id_palette
                }
            })

            if (!paletteFind) return res.status(400).json({ message: 'color not defined' })

            return res.json({ color: color, message: 'ok' })

        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'error' })
        }
    }
}



export default new ColorController()