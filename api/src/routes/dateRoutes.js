const { Router } = require("express");
const {getDates, getDatesFormat, postDate, deleteDate, putDate} = require("../controllers/dateControllers")
const dateRoutes = Router()

dateRoutes.get("/:id", async (req,res) => {
    const {id} = req.params
    try{
        const dates = await getDates(id)
        res.status(200).json(dates)
    }catch(e){
        res.status(404).json({message:e})
    }
})

dateRoutes.get("/format/:id/:expertId", async (req,res) => {
    const {id, expertId} = req.params
    try{
        const dates = await getDatesFormat(id, expertId)
        res.status(200).json(dates)
    }catch(e){
        res.status(404).json({message:e})
    }
})

dateRoutes.post("/", async (req,res)=> {
    const date = req.body
    console.log(date)
    try{
        const post = await postDate(date)
        res.status(200).json({message:post})
    }catch(e){
        res.status(404).json({message:e})
    }
})

dateRoutes.put("/", async (req,res)=> {
    const date = req.body
    try{
        const dates = await putDate(date)
        res.status(200).json({message:dates})
    }catch(e){
        res.status(404).json({message:e})
    }
})

dateRoutes.delete("/:id", async (req,res)=> {
    const {id} = req.params
    try{
        const date = await deleteDate(id)
        res.status(200).json({message:date})
    }catch(e){
        res.status(404).json({message:e})
    }
})

module.exports = dateRoutes