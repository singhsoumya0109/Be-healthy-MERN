import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import { connectDB } from './src/lib/db.js';
import authRoutes from './src/routes/auth.route.js';
import searchRoutes from './src/routes/searchRoutes.js'
import messageRoutes from './src/routes/message.route.js'
import cors from "cors";


dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors({ origin: "http://127.0.0.1:5174", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/message', messageRoutes);

app.listen(PORT, ()=>{
    console.log('Server started on http://localhost:'+PORT);
    connectDB();
});