import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  orderId: {
    type: String,
    required: true,
  },
  customerId: {
    // type: Schema.Types.ObjectId,
    // ref: "Customer",
    // required: true,
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Order", orderSchema);
