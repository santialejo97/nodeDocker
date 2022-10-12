import mongoose from "mongoose" 

const db = async () => {
  const connectDB = await mongoose.connect("mongodb://localhost:27017/nodedocker")
  console.log(connectDB.connection.db.databaseName)
}

export default db


