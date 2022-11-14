import express from "express"
import router from "./routes.js"
const app = express()
app.use(router)
app.listen(process.env.MONGOPORT || 3000,()=>{console.log("Host on port 3000")})
