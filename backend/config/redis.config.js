import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config({ path: "./env/.env" });

let redisClient = null;

if (process.env.REDIS_URL) {
  redisClient = createClient({
    url: process.env.REDIS_URL,
  });

  redisClient.on("error", (err) => console.error("Redis Client Error:", err));
  redisClient.on("connect", () => console.log("Redis Client Connected"));
}

const connectRedis = async () => {
  if (!redisClient) {
    console.log("REDIS_URL not set; skipping Redis connection");
    return;
  }

  try {
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }
  } catch (error) {
    console.error("Could not connect to Redis:", error.message);
    // We don't exit process here to allow the app to run without cache if Redis is down
  }
};

export { redisClient, connectRedis };
