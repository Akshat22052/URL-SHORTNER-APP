import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';



dotenv.config();

import connectDB from './config/dbConfig';
import e from 'express';
// connectDB();


import shortUrl from './routes/shortURL';



const PORT = process.env.PORT || 5001;




const app = express();  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));




// app.get("/", (req,res) => {
//     res.send("Hello from server");
// })


app.use("/api/", shortUrl);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

