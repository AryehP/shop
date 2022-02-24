import  express  from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { appRouter } from './Routes.mjs';


const hostname = '127.0.0.1';
const port = '3001';

const app = express();

app.use(morgan('combined'));

app.use(bodyParser.json());

// app.get('/api/products',async (req,res) => {

//     const result = await fetch('https://fakestoreapi.com/products');
//     const json = await(result.json());
//     res.send(json);
// })

// app.get('/api/categories',async (req,res) => {
//     const result = await fetch('https://fakestoreapi.com/products/categories');
//     const json = await(result.json());
//     res.send(json);
// })
app.use('/api',appRouter);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

