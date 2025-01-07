const mongoose = require("mongoose");
//const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,  {
    useUnifiedTopology: true,   // Use the unified topology engine
    useNewUrlParser: true,      // Use the new URL parser
  }
);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

