import { Router } from "express";
import { addNewProudact, deleteProudact, getAllProudacts, getProudactById, updateProutact } from "./proudacts.data.mjs";


export const proudactsRouter = Router();



proudactsRouter.get('/',(req,res) => {
    res.send(getAllProudacts());
})

proudactsRouter.post('/',(req,res) => {
    
    res.send(addNewProudact(req.body));
})

proudactsRouter.get('/:id',(req,res) => {

    res.send(getProudactById(req.params.id));
})

proudactsRouter.put('/:id',(req,res) => {
    
    res.send(updateProutact(req.params.id,req.body));
})

proudactsRouter.delete('/:id',(req,res) => {
    
    deleteProudact(req.params.id);
    res.send("ok");
})
