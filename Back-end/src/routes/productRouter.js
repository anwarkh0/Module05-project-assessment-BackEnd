import { Router } from "express";
import {
    AddProduct,
    deleteProduct,
    getProducts,
    getProduct,
    editProduct,
} from "../controllers/ProductController.js";

export const productRoutes = Router();

productRoutes.post("/create", AddProduct);
productRoutes.get("/", getProducts);
productRoutes.get("/one", getProduct);
productRoutes.delete("/delete", deleteProduct);
productRoutes.patch("/update", editProduct);