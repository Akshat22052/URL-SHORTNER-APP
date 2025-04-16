import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5001;




const app = express();  


app.get("/", (req,res) => {
    res.send("Hello from server");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

