const express = require("express");
const {
  InvoiceHeader,
  InvoiceItem,
  BillSundry,
} = require("../models/invoiceItem");

const router = express.Router();

router.post("/", async (req, res) => {
  const { id, itemName, quantity, price } = req.body;
  const amount = quantity * price;
  if (quantity <= 0 || price <= 0 || amount <= 0) {
    res.send({ message: "Quantity or price cannot be zero" });
  } else {
    const postRes = await new InvoiceItem.insertMany({
      id,
      itemName,
      quantity,
      price,
      amount,
    });
    res.send(postRes);
  }
});

router.put("/:id", async(req, res) => {
    const invoiceId = req.params.id;
    const invoiceFound = await InvoiceItem.findById({invoiceId})
    if (!invoiceFound){
        res.send({message: "Invoice does not exist"})
    }else{
        const updatedInvoice = await InvoiceItem.updateOne(req.body)
        res.send(updatedInvoice);
    }
});

router.delete("/:id", async(req, res) => {
    const invoiceId = req.params.id;
    const invoiceFound = await InvoiceItem.findById({invoiceId})
    if (!invoiceFound){
        res.send({message: "Invoice does not exist"})
    }else{
        await InvoiceItem.findByIdAndDelete({invoiceId})
        res.send("deleted invoice");
    }
});

router.get("/:id", async(req, res) => {
    const invoiceId = req.params.id;
    const invoiceFound = await InvoiceItem.findById({invoiceId})
    if (!invoiceFound){
        res.send({message: "Invoice does not exist"})
    }else{
        const invoice = await InvoiceItem.findOne({invoiceId})
        res.send(invoice);
    }
});

router.get("/", async(req, res) => {
  const invoices = await InvoiceItem.find()
  res.send(invoices)
});

module.exports = router;
