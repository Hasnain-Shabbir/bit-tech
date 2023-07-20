import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://localhost:27017/bitTech");
    console.log("Connect to database successfully!");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
