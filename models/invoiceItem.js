const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sudeeshnareddy:sudeeshna123@sudeeshna.khojl44.mongodb.net/invoices?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  }).catch((err)=>{
      console.log(err)
  })

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

const BillSundrySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  billSundryName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

// Id: UUID
// Date: string (UTC)
// InvoiceNumber: number
// CustomerName: string
// BillingAddress: string
// ShippingAddress: string
// GSTIN: string
// TotalAmount: Decimal

const InvoiceHeaderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  InvoiceNumber: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  billingAddress: {
    type: String,
    required: true,
  },
  shippingAddress: {
    type: String,
    required: true,
  },
  gstin: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});

const InvoiceItem = mongoose.model(InvoiceItemSchema, "InvoiceItem");
const BillSundry = mongoose.model(BillSundrySchema, "BillSundry");
const InvoiceHeader = mongoose.model(InvoiceHeaderSchema, "InvoiceHeader");

module.exports = { InvoiceItem, BillSundry, InvoiceHeader };
