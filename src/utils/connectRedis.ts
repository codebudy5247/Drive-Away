import { createClient } from 'redis';
import logger from "./logger";
import Redis from "ioredis"

const redisUrl = `redis://localhost:6379`;
const redisClient = createClient({
  url: redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    logger.info('Redis client connected...');
  } catch (err: any) {
    logger.error(err.message);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

redisClient.on('error', (err) => console.log(err));

export default redisClient;
