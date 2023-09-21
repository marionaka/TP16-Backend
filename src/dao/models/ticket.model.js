import mongoose from "mongoose";



const ticketSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
  },
  purchase_datetime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  amount: Number,
  purchaser: {
    type: String,
    required: true,
  }
});

const ticketModel = mongoose.model("tickets", ticketSchema);
export default ticketModel;
