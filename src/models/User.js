import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  avatarUrl: String,
  socialOnly: { type: Boolean, default: false },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  name: { type: String, required: true },
  location: String,
});

userSchema.pre("save", async function () {
  console.log("user password:", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("hashed password:", this.password);
});

const User = mongoose.model("User", userSchema);

export default User;
