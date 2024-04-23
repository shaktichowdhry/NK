import 'dotenv/config';
import express from 'express';
import categoriesRoutes from './admin/routes/categoryRoutes.js';
import productRoutes from './admin/routes/productRoutes.js'

const app = express();
const PORT = process.env.SERVER_PORT || 5500;


app.use('/admin/api/categories', categoriesRoutes);
app.use('/admin/api/products', productRoutes);

app.get('/', (req, res) => {
  // res.send('<h1>Welcome to NK Server</h1>');
  res.json({message: "Welcome to NK Server"})
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
