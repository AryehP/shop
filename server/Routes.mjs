import { Router } from "express";
import { proudactsRouter } from './Products.mjs';
import { categorisRouter } from './Categoris.mjs';
import { cartRouter } from './Cart.mjs';
import { usersRouter } from './Users.mjs';

export const appRouter = Router();

appRouter.use('/proudacts',proudactsRouter);
appRouter.use('/categoris',categorisRouter);
appRouter.use('/carts',cartRouter);
appRouter.use('/users',usersRouter);