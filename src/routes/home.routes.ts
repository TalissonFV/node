import { Router } from "express";
import * as controller from "../controllers/home.controller";

class HomeRoutes {
    router = Router();
  
    constructor() {
        this.intializeRoutes();
    }
    
    intializeRoutes() {
        this.router.get("/", controller.home);
        this.router.get("/brat", controller.brat); 
    }
}

export default new HomeRoutes().router;
