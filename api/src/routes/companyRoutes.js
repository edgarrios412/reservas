const { Router } = require("express");
const {getUsers, postUser, deleteUser, putUser} = require("../controllers/userControllers")
const companyRoutes = Router()

companyRoutes.get("/", async (req,res) => {
    try{
        const users = await getCompanys()
        res.status(200).json(users)
    }catch(e){
        res.status(404).json({message:e})
    }
})

companyRoutes.post("/", async (req,res)=> {
    const date = req.body
    console.log(date)
    try{
        const post = await postCompany(date)
        res.status(200).json({message:post})
    }catch(e){
        res.status(404).json({message:e})
    }
})

companyRoutes.put("/", async (req,res)=> {
    const date = req.body
    try{
        const dates = await putCompany(date)
        res.status(200).json({message:dates})
    }catch(e){
        res.status(404).json({message:e})
    }
})

companyRoutes.delete("/:id", async (req,res)=> {
    const {id} = req.params
    try{
        const date = await deleteCompany(id)
        res.status(200).json({message:date})
    }catch(e){
        res.status(404).json({message:e})
    }
})

module.exports = companyRoutes