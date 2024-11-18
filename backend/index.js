import express from 'express';
import { config } from "dotenv";
import cors from 'cors';
import mongoose from 'mongoose';
import { MongoClient } from "mongodb";
import recipeRoutes from "./routing.js";

// Next Steps:
// Fix Get Requests
// Initialize Frontend Side




const app = express();
const PORT = 4000;


app.use(cors());
app.use(express.json());
app.use('/', recipeRoutes);

const url = "mongodb+srv://user:password@recipecluster.dveki4c.mongodb.net/?retryWrites=true&w=majority&appName=RecipeCluster"

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

mongoose
  .connect(url)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
