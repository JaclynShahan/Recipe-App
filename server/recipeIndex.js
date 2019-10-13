const express = require("express");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();

const app = express();


app.use(cors());
app.use(express.json());

const port = 3932;

const getRecipes = (req , res) => {
    const dbInstance = req.app.get("db")
    dbInstance.getRecipe().then((resp) => res.status(200).send(resp))
}

app.get(`/api/getRecipes`, (req, res) => {
    getRecipes(req,res)
})

app.post(`/api/createRecipe`, (req, res) => {
    //console.log(req)
    const {title, directions, ingredients} = req.body
    console.log("Request received", title, directions, ingredients)
    console.log(req.body)
    const dbInstance = req.app.get("db")
    dbInstance.createRecipe(title, directions, ingredients)
    .then(() => {
        getRecipes(req, res)
    })
})

app.delete(`/api/deleteRecipe/:id`, (req, res) => {
    const dbInstance = req.app.get("db")
    dbInstance.deleteRecipe(req.params.id).then((resp) => getRecipes(req,res))
})



massive(process.env.connectionString).then((db) => {
    app.set("db", db)
    app.listen(3932, () => {
        console.log(`Listening on port ${port}`)
    })
    console.log("Connected to database")
})