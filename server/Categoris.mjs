import { Router } from "express";
import {getRandpmeId} from './Utilis.mjs'

export const categorisRouter = Router();

let categoris = [
    {title: "mobile", id:0},
    {title: "computer", id:1},
    {title: "gadgets", id:2},
];

categorisRouter.get('/',(req,res) => {
    res.send(categoris);
})

categorisRouter.post('/',(req,res) => {

    const id = getRandpmeId();
    const newCategory = {
        ...req.body,
        id: id,
    }
    categoris.push(newCategory);
    res.send(newCategory);
})

categorisRouter.get('/:id',(req,res) => {
    const id = req.params.id;
    const category = categoris.find(category => category.id == id);
    res.send(category)
})

categorisRouter.put('/:id',(req,res) => {
    const id = req.params.id;
    const categoryToUpdate = {...req.body,id}
    categoris = categoris.map(category => {
        if(category.id == id)
            return categoryToUpdate;
        else
            return category;
    });
    res.send(categoryToUpdate);
})

categorisRouter.delete('/:id',(req,res) => {
    const id = req.params.id;
    categoris = categoris.filter(category => category.id != id);
    res.send("ok");
})