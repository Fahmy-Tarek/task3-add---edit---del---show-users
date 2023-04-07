// ay 7aga btzhr 3la el broser btbb3t  be el send anma bst2bl mn 5lal el requst


const express = require("express")
// 3shan el file hbs e2ra
const path = require("path")
// 3shan el localStorage 40000
const hbs = require("hbs")
const app = express()
// mlf el css
const myStaticDir = path.join(__dirname, "../resources/public")
//  mlf el all.hbs
const myViewsDir = path.join(__dirname, "../resources/views")
//  mlf el header + footer + nav
const myPartialDir = path.join(__dirname, "../resources/layouts")
// as2l leh sh8lt mlf el css m3 el exprees we leh ast5dmt use msh set (da mlf asasy)
app.use(express.static(myStaticDir))
// bsh8l mlfat el hbs html  we 3aml requir leha     
app.set("view engine", "hbs")
// b3rf name el folder  we b3rf el dirname bta3o
app.set("views", myViewsDir)
// hna klmt (registerPartials) hya 2ly 5lt mlfat el hbs ely da5l folder layouts 2ly wa5den ns5 le el headr we ba2y m7toa el sf7ay el asasya hbs ely hma [add = all = edit = err404 single] we kman mst5dma fe local storge
hbs.registerPartials(myPartialDir)
app.use(express.urlencoded({extended:true}))
const userRoutes = require("./routes/user.routes")
const exp = require("constants")
app.use(userRoutes)
app.all("*", (req,res)=> res.render("err404", { pageTitle:"Error in page"} ) )
module.exports = app
