import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('Connected to octofit_db');
  } catch (error) {
    console.warn('MongoDB unavailable; continuing without a database connection:', error);
  }
}

void connectToDatabase();

export default db;
