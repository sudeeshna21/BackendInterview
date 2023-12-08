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
const InvoiceHeader = mongoose.model("InvoiceHeader",InvoiceHeaderSchema);