import http from 'http';
import fetch from "node-fetch";
import  express  from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const hostname = '127.0.0.1';
const port = '3001';

const app = express();

app.use(morgan('combined'));

//app.use(bodyParser(bodyParser.json()));

app.use((req,res,next) => {

    const time = Date.now();
    next();
    const diff = Date.now() - time;
    console.log(`${req.url} ${diff}`);
})

app.get('/api/products',async (req,res) => {

    const result = await fetch('https://fakestoreapi.com/products');
    const json = await(result.json());
    res.send(json);
})

app.get('/api/categories',async (req,res) => {
    const result = await fetch('https://fakestoreapi.com/products/categories');
    const json = await(result.json());
    res.send(json);
})

// const produacts = [];

// let categoris = [
//     {title: "mobile", id:0},
//     {title: "computer", id:1},
//     {title: "gadgets", id:2},
// ];
// app.get('/proudacts',(req,res) => {
//     res.send(produacts);
// })

// app.post('/proudacts',(req,res) => {
//     produacts.push(req.body);
//     res.send(req.body);
// })

// app.get('/categoris',(req,res) => {
//     res.send(categoris);
// })

// app.post('/categoris',(req,res) => {
//     categoris.push(req.body);
//     res.send(req.body);
// })

// app.get('/categoris/:id',(req,res) => {
//     const id = req.params.id;
//     const category = categoris.find(category => category.id == id);
//     res.send(category)
// })

// app.put('/categoris/:id',(req,res) => {
//     const id = req.params.id;
//     const categoryToUpdate = {...req.body,id}
//     categoris = categoris.map(category => {
//         if(category.id == id)
//             return categoryToUpdate;
//         else
//             return category;
//     });
//     res.send(categoryToUpdate);
// })

// app.delete('/categoris/:id',(req,res) => {
//     const id = req.params.id;
//     categoris = categoris.filter(category => category.id != id);
//     res.send("ok");
// })

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

