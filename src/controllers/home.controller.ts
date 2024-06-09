import { Request, Response } from 'express';

export function home (req: Request, res: Response): Response { 
    console.log("hi im home")
    return res.status(200).send("Hello World");
}

export function brat (req: Request, res: Response) { 
    return res.status(200).send("BRAT");
}