// // models/User.js
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// // Define the User schema
// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: [true, "Username is required"],
//       unique: true,
//       trim: true,
//       minLength: [3, "Username must be at least 3 characters long"]
//     },
//     email: {
//       type: String,
//       required: [true, "Email is required"],
//       unique: true,
//       trim: true,
//       lowercase: true,
//       match: [/\S+@\S+\.\S+/, "Please use a valid email address"]
//     },
//     password: {
//       type: String,
//       required: [true, "Password is required"],
//       minLength: [6, "Password must be at least 6 characters long"]
//     },
//     avatar: {
//       type: String, // optional: store profile picture URL
//     },
//     lastSeen: {
//       type: Date,
//       default: Date.now
//     }
//   },
//   { timestamps: true } // automatically adds createdAt and updatedAt
// );

// // Pre-save hook to hash password before saving
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Method to compare entered password with hashed password
// userSchema.methods.comparePassword = async function (candidatePassword) {
//   return await bcrypt.compare(candidatePassword, this.password);
// };

// // Export the User model
// const User = mongoose.model('User', userSchema);
// export default User;

// models/user.model.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be at least 6 characters long"]
    },
    profilePic: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;