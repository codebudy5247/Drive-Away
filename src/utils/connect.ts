import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  // const dbUri = config.get<string>("dbUri");
  // const dbUrl = `mongodb://${config.get<string>("dbName")}:${config.get<string>(
  //   "dbPass"
  // )}@localhost:6000/jwtAuth?authSource=admin`;
  const dbUrl = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@localhost:6000/${process.env.MONGODB_DATABASE_NAME}?authSource=admin`;
  try {
    await mongoose.connect(dbUrl);
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
