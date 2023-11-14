import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required:true
  }
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model('Post', postSchema);