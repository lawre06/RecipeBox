import express from 'express';
import mongoose from 'mongoose';
import { Recipe } from './model';
import cors from 'cors';

const app = express();
const port = 4000;


app.use(cors());
app.use(express.json());


app.post('/recipes', async(req, res) => {
    console.log(req)
    const newRecipe = {
        title : req.title,
        content : req.content
    }
    return res.status().json(newRecipe);
});

app.get('/recipes/:id', async(req, res) => {
    console.log(req)
    
});

app.delete('/recipes/delete', async(req, res) => {
    console.log(req)
});