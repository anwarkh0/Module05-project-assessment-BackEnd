import Product from "../models/ProductsModel.js";
import mongoose from "mongoose";

const AddProduct = async (req, res) => {
    const {
        imageURLs,
        title,
        price,
        description,
    } = req.body;


    try {
        // Check if a product with the same name already exists
        const existingProduct = await Product.findOne();

        // Create a new product
        const newProduct = await Product.create({
            imageURLs,
            title,
            price,
            description,
        });
        return res
            .status(200)
            .json({ message: "Product added successfully", data: newProduct });
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const deleteProduct = async (req, res) => {
    const productId = req.body._id;
    try {
        await Product.findByIdAndUpdate(productId);

        return res
            .status(200)
            .json({ message: " product had been deleted succ" });
    }

    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ data: products });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const getProduct = async (req, res) => {

    try {
        const product = await Product.findOne({_id: id});
        if (!product) {
            return res.status(404).json({ message: "No product found" });
        }
        res.status(200).json({ data: product });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const editProduct = async (req, res) => {
    const {
        imageURLs,
        title,
        price,
        description,
    } = req.body;
    try {
        await Product.findByIdAndUpdate({_id: id},{
            imageURLs,
            title,
            price,
            description,
        });
        const updatedproduct = await Product.findById({_id: id});
        res
            .status(200)
            .json({ message: "product Info edited succ", data: updatedproduct });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};



export {
    AddProduct,
    deleteProduct,
    getProducts,
    getProduct,
    editProduct,
};
