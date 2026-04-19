import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import { profileRouter } from './routes/profile';
import { planRouter } from './routes/plan';
import rateLimit from 'express-rate-limit'
import helmet from "helmet";

dotenv.config();

const app = express()
app.use(helmet());
const PORT = process.env.PORT || 3001

const aiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: "You are training too hard! Try again in 15 minutes." }
})

const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
})


app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE",
}));
app.use(cookieParser());
app.use(express.json());

//API
app.use("/api/plan/generate", aiLimiter);
app.use("/api/", generalLimiter);
app.use("/api/profile", profileRouter);
app.use("/api/plan", planRouter);




app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})