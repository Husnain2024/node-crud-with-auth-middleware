const express = require('express');
const app = express();
const userRoutes = require('./routes/user-routes');
const productRoutes = require('./routes/product-routes');

const cors = require('cors');

const connectDb = require('./config/config');
const { json } = require('body-parser');
require('dotenv').config();

app.use(json());

connectDb();


app.use(cors()); // Allow all origins



app.use('/api/user',userRoutes);
app.use('/api/product', productRoutes);



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
