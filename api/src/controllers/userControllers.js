const {User} = require("../db.js")

module.exports = {
    getUsers: async () => {
        const users = await User.findAll()
        return users
    },
    getEmployees: async (id) => {
        const users = await User.findAll({
            where:{
                companyId:id
            }
        })
        return users
    },
    postUser: async (user) => {
        await User.create(user)
        return "Registrado correctamente"
    },
    putUser: async (user) => {
        const findUser = await User.findOne({
            where:{
                id:user.id
            }
        })
        if(findUser){
            if(user.name) findUser.name = user.name 
            if(user.lastname) findUser.email = user.email 
            if(user.phone) findUser.phone = user.phone 
            if(user.email) findUser.email = user.email
            if(user.password) findUser.password = user.password  
            await findUser.save()
            return "Usuario actualizado"
        }else return "No hemos encontrado ningun usuario con ese ID"
    },
    deleteUser: async (id) => {
        const user = await User.findOne({
            where:{
                id:id
            }
        })
        if(user){
            await user.destroy()
            return "Usuario eliminado"
        }else return "No hemos encontrado ningun usuario con ese ID"
    }
}