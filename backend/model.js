import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
    {
        name: {

        },
        description: {

        }
    }
);

export const Recipe = mongoose.model('Recipe', recipeSchema);