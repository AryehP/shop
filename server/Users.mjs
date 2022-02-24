import { Router } from "express";
import {getRandpmeId} from './Utilis.mjs'
import {getProudactBySellerId} from './proudacts.data.mjs'

export const usersRouter = Router();


let users = [];

usersRouter.get('/',(req,res) => {
    res.send(users);
})

usersRouter.post('/',(req,res) => {

    const id = getRandpmeId();

    const newUser = {
        ...req.body,
        id: id,
    }
    users.push(newUser);
    res.send(newUser);
})

usersRouter.get('/:id',(req,res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user)
})

usersRouter.put('/:id',(req,res) => {
    const id = req.params.id;
    const userToUpdate = {...req.body,id}
    users = users.map(user => {
        if(user.id == id)
            return userToUpdate;
        else
            return user;
    });
    res.send(userToUpdate);
})

usersRouter.delete('/:id',(req,res) => {
    const id = req.params.id;
    users = users.filter(user => user.id != id);
    res.send("ok");
})

usersRouter.get('/:id/proudacts',(req,res) => {
    res.send(getProudactBySellerId(req.params.sellerId));
})