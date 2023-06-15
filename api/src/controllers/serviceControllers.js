const {Service} = require("../db.js")

module.exports = {
    getServices: async (id) => {
        const services = await Service.findAll({
            where:{
                companyId:id
            }
        })
        return services
    },
    postService: async (service) => {
        const newService = await Service.create(service)
        // newService.setCompany(service.companyId)
        return "Servicio creado"
    }
}