const { Router } = require("express");
const {getUsers, postUser, deleteUser, putUser} = require("../controllers/userControllers")
const userRoutes = Router()

userRoutes.get("/", async (req,res) => {
    try{
        const users = await getUsers()
        res.status(200).json(users)
    }catch(e){
        res.status(404).json({message:e})
    }
})

userRoutes.post("/", async (req,res)=> {
    const date = req.body
    console.log(date)
    try{
        const post = await postUser(date)
        res.status(200).json({message:post})
    }catch(e){
        res.status(404).json({message:e})
    }
})

userRoutes.put("/", async (req,res)=> {
    const date = req.body
    try{
        const dates = await putUser(date)
        res.status(200).json({message:dates})
    }catch(e){
        res.status(404).json({message:e})
    }
})

userRoutes.delete("/:id", async (req,res)=> {
    const {id} = req.params
    try{
        const date = await deleteUser(id)
        res.status(200).json({message:date})
    }catch(e){
        res.status(404).json({message:e})
    }
})

module.exports = userRoutes