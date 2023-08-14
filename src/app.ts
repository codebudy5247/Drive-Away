import express, { NextFunction,Request, Response } from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
require('dotenv').config();
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import AuthRouter from './routes/authRoute';
import UserRouter from "./routes/userRoute"

const port = config.get<number>("port");
const app = express();

// Middleware

// Body Parser
app.use(express.json({ limit: '10kb' }));

// Cookie Parser
app.use(cookieParser());

// Logger
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Cors
app.use(
  cors({
    origin: config.get<string>('origin'),
    credentials: true,
  })
);

// Routes
app.use('/api', AuthRouter);
app.use('/api', UserRouter);

// UnKnown Routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.listen(port, async () => {
  logger.info(`App is running at http://localhost:${port}`);
  await connect();
});

