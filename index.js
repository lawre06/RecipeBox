import express from 'express';
import { config } from "dotenv";
import cors from 'cors';
import { MongoClient } from "mongodb";
const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());


const url = "mongodb+srv://pacific9682:Rwlabf6NOx00Vn4H@recipecluster.dveki4c.mongodb.net/?retryWrites=true&w=majority&appName=RecipeCluster"

const client = new MongoClient(url)
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}


app.post('/recipes', async(req, res) => {
    console.log(req)
    const newRecipe = {
        title : req.title,
        content : req.content
    }

});

app.get('/recipes/:id', async(req, res) => {
    console.log(req)
});

app.delete('/recipes/delete', async(req, res) => {
    console.log(req)
});

run();