const mongoose = require("mongoose");

const handleDbConnect = async() => {
    try {
        const db = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(db.connection.name)
    } catch (error) {
        console.log(error)
    }
}


module.exports = handleDbConnect;