const {Date} = require("../db.js")
const format = require("../helpers/formatDate.js")
const interval = require("../helpers/intervalDate.js")

module.exports = {
    getDates: async (id) => {
        const dates = await Date.findAll({
            where:{
                companyId: id
            }
        })
        return dates
    },
    getDatesFormat: async (id, expertId) => {
        const dates = await Date.findAll({
            where:{
                companyId: id,
                resourceId: expertId
            }
        })
        const intervalos = [] 
        dates.map(d => {
            const i = interval(format(d.start),format(d.end))
            intervalos.push(...i)
        })

        return Array.from(new Set(intervalos))
    },
    postDate: async (date) => {
        const newDate = await Date.create(date)
        return "Reserva exitosa"
    },
    putDate: async (date) => {
        const findDate = await Date.findOne({
            where:{
                id:date.id
            }
        })
        if(findDate){
            if(date.title) findDate.title = date.title 
            if(date.start) findDate.start = date.start 
            if(date.end) findDate.end = date.end 
            await findDate.save()
            return "Reserva actualizada"
        }else return "No hemos encontrado la reserva con ese ID"
    },
    deleteDate: async (id) => {
        const date = await Date.findOne({
            where:{
                id:id
            }
        })
        if(date){
            await date.destroy()
            return "Reserva eliminada"
        }else return "No hemos encontrado la reserva con ese ID"
    }
}