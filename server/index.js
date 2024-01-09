const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel =require('./models/user')
const PlantsModel =require('./models/all_plants')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/db")

 app.get('/Aboutus', (req, res) => {
     UserModel.find()
     .then(student => res.json(student))
     .catch(err => res.json(err))
     console.log("server is runninsdsag")
//     const student={
//     }
// res.json(student);

})
// Display all plants


const { MongoClient } = require('mongodb');

async function fetchData() {
   
  const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('herbel_cartel'); // Replace with your database name
    const collection = database.collection('Plants'); // Replace with your collection name

    // Fetch data from the collection
    const query = {}; // You can add query conditions if needed
    const result = await collection.find(query).toArray();

    // Plants => res.json(result)
    console.log('Fetched data:', result);
    return result;
  } catch (err) {
    console.error('Error fetching data:', err);
  } finally {
    await client.close();
  }
}

// Call the function to fetch data
  app.get('/Home', async(req, res) => {
     let Plants=await  fetchData();
//     console.log("data inside endpoint is"+Plants)
//      PlantsModel.find()
//      .then(Plants => res.json(Plants))
//      .catch(err => res.json(err))
//      console.log("server is runninga")
     res.json(Plants);
  })
// app.get('/Home', async (req, res) => {
//     try {
//       const plants = await PlantsModel.find();
//       console.log("server is running");
//       res.json(plants);
//     } catch (err) {
//       console.error("Error fetching plants:", err);
//       res.status(500).json({ error: "Failed to fetch plants" });
//     }
//   });
app.listen(3000, () => {
    console.log("server is running1")
})
