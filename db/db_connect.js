import mongoose from "mongoose";

const db = async () => {
  const connectDB = await mongoose.connect(
    "mongodb://mongo:MEIisySKwOZnOHvf0BJL@containers-us-west-108.railway.app:7313"
  );
  console.log(connectDB.connection.db.databaseName);
};

export default db;
