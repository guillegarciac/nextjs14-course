import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
  }
}

export default connect;