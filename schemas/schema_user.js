import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, lowercase: true },
  email: { type: String, unique: true },
  password: { type: String },
});

const User = mongoose.model("user", userSchema);

export default User;
