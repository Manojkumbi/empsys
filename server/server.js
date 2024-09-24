import cors from 'cors';
import mongoose from 'mongoose';
import express, { json } from 'express';

const app = express();

const PORT = 3000;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; 

app.use(express.json());
app.use(cors());


// mongoose.connect(process.env.DB_LOCATION, {
//     autoIndex: true
// })

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/a', (req, res) => {
    const data = req.body;
    
    res.json({
        message: 'Data received',
        data
    });
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

