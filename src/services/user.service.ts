import { omit, get } from "lodash";
import { FilterQuery, QueryOptions } from "mongoose";
import config from "config";
import userModel, { User } from "../models/user.model";
import { excludedFields } from "../controllers/auth.controller";
import { signJwt } from "../utils/jwt";
import redisClient from "../utils/connectRedis";
import { DocumentType } from "@typegoose/typegoose";
import fs from "fs";

var accessTokenPrivateKEY = fs.readFileSync(
  "./access.token.private.key",
  "utf8"
);
// var accessTokenPublicKEY = fs.readFileSync("./access.token.public.key", "utf8");

var refreshTokenPrivateKEY = fs.readFileSync(
  "./access.token.private.key",
  "utf8"
);
// var refreshTokenPublicKEY = fs.readFileSync(
//   "./access.token.public.key",
//   "utf8"
// );

// CreateUser service
export const createUser = async (input: Partial<User>) => {
  const user = await userModel.create(input);
  return omit(user.toJSON(), excludedFields);
};

// Find User by Id
export const findUserById = async (id: string) => {
  const user = await userModel.findById(id).lean();
  return omit(user, excludedFields);
};

// Find All users
export const findAllUsers = async () => {
  return await userModel.find();
};

// Find one user by any fields
export const findUser = async (
  query: FilterQuery<User>,
  options: QueryOptions = {}
) => {
  return await userModel.findOne(query, {}, options).select("+password");
};

// Sign Token
export const signToken = async (user: DocumentType<User>) => {
  // Sign the access token
  const access_token = signJwt({ sub: user.id }, accessTokenPrivateKEY, {
    expiresIn: `${config.get<number>("accessTokenExpiresIn")}m`,
  });
  // Sign the refresh token
  const refresh_token = signJwt({ sub: user._id }, refreshTokenPrivateKEY, {
    expiresIn: `${config.get<number>('refreshTokenExpiresIn')}m`,
  });
  // Create a session in Redis
  await redisClient.set(user._id.toString(), JSON.stringify(user), {
    EX: 60 * 60, // Expires in 1 hour
  });

  // Return access token
  return { access_token,refresh_token };
};
