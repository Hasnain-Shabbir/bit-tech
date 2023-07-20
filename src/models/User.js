import mongoose, { Schema } from "mongoose";

const userModel = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
  },
  {
    timestamps: true,
  },
);

// export default mongoose.model("User", userModel);
const User = mongoose.models.User || mongoose.model("User", userModel);
export default User;
