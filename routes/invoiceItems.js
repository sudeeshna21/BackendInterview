const express = require("express");
const InvoiceItem = require("../models/invoiceItem");

const router = express.Router();

router.get("/", async (req, res) => {
    const invoices = await InvoiceItem.find()
    res.status(200).json(invoices)
});

router.post("/", async (req, res) => {
  const { id, itemName, quantity, price } = req.body;
  const amount = quantity * price;
  if (quantity <= 0 || price <= 0 || amount <= 0) {
    res.send({ message: "Quantity or price cannot be zero" });
  } else {
    const postRes = await InvoiceItem.create({
      id,
      itemName,
      quantity,
      price,
      amount,
    });
    res.send(postRes);
  }
});

router.put("/:id", async (req, res) => {
  const invoiceId = req.params.id;
  const invoiceFound = await InvoiceItem.findById(invoiceId);
  if (!invoiceFound) {
    res.send({ message: "Invoice does not exist" });
  } else {
    const updatedInvoice = await InvoiceItem.findByIdAndUpdate(invoiceId, req.body, {new:true});
    res.status(200).json(updatedInvoice);
  }
});

router.delete("/:id", async (req, res) => {
  const invoiceId = req.params.id;
  const invoiceFound = await InvoiceItem.findById({ invoiceId });
  if (!invoiceFound) {
    res.send({ message: "Invoice does not exist" });
  } else {
    await invoiceFound.remove()
    res.status(200).json(invoiceFound);
  }
});

router.get("/:id", async (req, res) => {
  const invoiceId = req.params.id;
  const invoiceFound = await InvoiceItem.findById(invoiceId );
  if (!invoiceFound) {
    res.send({ message: "Invoice does not exist" });
  } else {
    res.status(200).json(invoiceFound);
  }
});


module.exports = router;
