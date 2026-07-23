"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
async function connectToDatabase() {
    try {
        await mongoose_1.default.connect(connectionString, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log('Connected to octofit_db');
    }
    catch (error) {
        console.warn('MongoDB unavailable; continuing without a database connection:', error);
    }
}
void connectToDatabase();
exports.default = db;
