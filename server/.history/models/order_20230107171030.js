import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema( {
  products: [ { type: ObjectId, ref: "Product" } ],
  payment: {},
  buyer: { type: ObjectId, ref: "User" }

} );

export default mongoose.model( "Order", orderSchema );