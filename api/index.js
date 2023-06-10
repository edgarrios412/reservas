const app = require("./src/app")
const {conn} = require("./src/db")
const PORT = 3001;

conn.sync({force:true}).then(() => {
    app.listen(PORT, () => {
        console.log("Server listening on port "+ PORT)
    })
})