const mongoose = require("mongoose");
const InvoiceItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});


const InvoiceItem = mongoose.model("InvoiceItem", InvoiceItemSchema);

module.exports = InvoiceItem;
