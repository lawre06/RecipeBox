import express from 'express';
import mongoose from 'mongoose';
import { Recipe } from './model.js';
import cors from 'cors';

const router = express.Router();


router.post('/recipes', async(req, res) => {
    console.log(req);
    const newRecipe = {
        title : req.title,
        description : req.description
    }
    const recipe = await Recipe.create(newRecipe);
    return res.status(201).json(recipe);

});

router.get('/recipes/all', async(req, res) => {
    console.log(req);
    const recipes = await Recipe.find({});

    return res.status(200).json({
        count: recipes.length,
        data: recipes
    })
});

router.delete('/recipes/:id', async(req, res) => {
    console.log(req);
    id = req.params['id'];
    value = await Recipe.findByIdAndDelete(id);
    
    return res.status().json({message: 'Recipe Deleted'});

});

router.get('/recipes/:id', async(req, res) => {
    console.log(req);
    id = req.params['id'];
    value = await Recipe.find(id);

    return res.status().json(value);
})

router.put('/recipes/:id', async(req, res) => {
    console.log(req);
    id = req.params['id'];
    editRecipe = {
        title : req.title,
        description : req.description
    }
    const value = Recipe.findByIDAndUpdate(id, editRecipe);
    return res.status(201).json(value);
})

export default router;
