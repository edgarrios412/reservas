const { Router } = require("express");
const {getCompany, postCompany} = require("../controllers/companyControllers")
const companyRoutes = Router()

companyRoutes.get("/", async (req,res) => {
    try{
        const companies = await getCompany()
        res.status(200).json(companies)
    }catch(e){
        res.status(404).json({message:e})
    }
})

companyRoutes.post("/", async (req,res)=> {
    const company = req.body
    try{
        const newCompany = await postCompany(company)
        res.status(200).json({message:newCompany})
    }catch(e){
        res.status(404).json({message:e})
    }
})

module.exports = companyRoutes