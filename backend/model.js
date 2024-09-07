import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
);

export const Recipe = mongoose.model('Recipe', recipeSchema);
