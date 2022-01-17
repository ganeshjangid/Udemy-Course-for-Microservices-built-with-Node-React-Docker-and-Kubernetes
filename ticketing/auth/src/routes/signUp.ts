import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/sign-up', [
    body('email').notEmpty().isEmail().withMessage('Email is not valid'),
    body('password').trim().notEmpty().isLength({ min: 2 }).withMessage('Password is not valid')
], (req: Request, res: Response) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        throw new Error("Invalid Email or Password!");
        const errors = new Error("Invalid Email or Password!");
    }
    const { email, password } = req.body;
    throw new Error("connection error");
    res.send({});
});

export { router as signUpRouter }