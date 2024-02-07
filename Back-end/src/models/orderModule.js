import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }}],

});
const order = mongoose.model('Order', orderSchema)


export default order;