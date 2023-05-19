const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
   try {
      const conn = await mongoose.connect("mongodb+srv://dawoodproud5:thankyouAllah786@consultation.hjgpho6.mongodb.net/");
      console.log(`mongoDB connected : ${conn.connection.host}`);
   } catch (error) {
      console.log("Connected error : ", error);
      process.exit(1);
   }
};

module.exports = connectDB;
