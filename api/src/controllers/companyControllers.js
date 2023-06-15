const {Company} = require("../db.js")

module.exports = {
    getCompany: async () => {
        const companies = await Company.findAll()
        return companies
    },
    postCompany: async (company) => {
        await Company.create(company)
        return "Empresa creada"
    }
}