import mongoose from "mongoose";

const db = async () => {
  const connectDB = await mongoose.connect(process.env.CONNECTDB);

  console.log(connectDB.connection.db.databaseName);
};

export default db;
