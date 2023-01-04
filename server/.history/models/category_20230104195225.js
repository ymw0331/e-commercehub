import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema( {
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
    unique: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  }
} );

export default Category