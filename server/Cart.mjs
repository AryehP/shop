import { Router } from "express";
import {getRandpmeId} from './Utilis.mjs'

export const cartRouter = Router();

let cartItems = [];


cartRouter.get('/',(req,res) => {
    res.send(cartItems);
})

cartRouter.post('/',(req,res) => {

    const id = getRandpmeId();
    const newCartItem = {
        ...req.body,
        id: id,
    }
    cartItems.push(newCartItem);
    res.send(newCartItem);
})

cartRouter.get('/:id',(req,res) => {
    const id = req.params.id;
    const cartItem = cartItems.find(cartItaem => cartItem.id == id);
    res.send(cartItem)
})

cartRouter.put('/:id',(req,res) => {
    const id = req.params.id;
    const cartItemToUpdate = {...req.body,id}
    cartItems = cartItems.map(cartItem => {
        if(cartItem.id == id)
            return cartItemToUpdate;
        else
            return cartItem;
    });
    res.send(cartItemToUpdate);
})

cartRouter.delete('/:id',(req,res) => {
    const id = req.params.id;
    cartItems = cartItems.filter(cartItem => cartItem.id != id);
    res.send("ok");
})