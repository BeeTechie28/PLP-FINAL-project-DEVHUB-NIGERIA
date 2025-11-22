const mongoose = require('mongoose');

// Define User/Enrollment schema
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/.+@.+\..+/, 'Please enter a valid email'], // basic email validation
    },
    course: {
      type: String,
      required: [true, 'Course selection is required'],
      trim: true,
    },
    startDate: {
      type: String,
      required: [true, 'Start date is required'],
    },
    role: {
      type: String,
      enum: ['student', 'mentor', 'admin'],
      default: 'student', // default to student
    },
    dateJoined: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // automatically adds createdAt & updatedAt
  }
);

// Optional: Hash password if you later implement authentication
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
//   const bcrypt = require('bcryptjs');
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
