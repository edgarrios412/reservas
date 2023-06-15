const { Router } = require("express");
const {getServices, postService} = require("../controllers/serviceControllers")
const serviceRoutes = Router()

serviceRoutes.get("/:id", async (req,res) => {
    const {id} = req.params
    try{
        const services = await getServices(id)
        res.status(200).json(services)
    }catch(e){
        res.status(404).json({message:e})
    }
})

serviceRoutes.post("/", async (req,res)=> {
    const service = req.body
    try{
        const newService = await postService(service)
        res.status(200).json({message:newService})
    }catch(e){
        res.status(404).json({message:e})
    }
})

module.exports = serviceRoutes