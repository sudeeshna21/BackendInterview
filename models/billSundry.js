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

const BillSundry = mongoose.model("BillSundry",BillSundrySchema);