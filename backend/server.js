//--------------------//
// Server & Database //
//------------------//

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
// import connectDB from './db.js'

const app = express();
const port = process.env.PORT || 3030;


// MongoDB Connection
import connectDB from "./config/connectDB.js"
connectDB();

app.use(express.json());
app.use(cors());

// connectDB();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/test", (req, res) => {
  res.send("Test")
});


//--------------------//
//      Routes       //
//------------------//