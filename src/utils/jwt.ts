import jwt, { SignOptions } from "jsonwebtoken";

/**
 * Function to sign a JWT
 * @param payload 
 * @param key 
 * @param options 
 * @returns 
 */
export const signJwt = (
  payload: Object,
  key: any,
  options: SignOptions = {}
) => {
  return jwt.sign(payload, key, {
    ...(options && options),
    algorithm: "RS256",
  });
};

/**
 * Function to verify a JWT token
 * @param token 
 * @param key 
 * @returns 
 */
export const verifyJwt = <T>(token: string, key: any): T | null => {
  try {
    return jwt.verify(token, key) as T;
  } catch (error) {
    return null;
  }
};

// jwt.sign(
//   payload: string | object | Buffer,          // The payload to be included in the JWT. It can be a string, object, or Buffer.
//   secretOrPrivateKey: Secret | PrivateKey,   // The secret or private key used to sign the token. It can be a string, Buffer, or a private key object.
//   options?: SignOptions,                     // Optional: Additional options for token signing.
//   callback?: SignCallback                    // Optional: A callback function to handle the result asynchronously (if not using promises).
// ): string | void | Promise<string>           // The return type can be a string (the signed JWT), void (if using a callback), or a Promise that resolves to a string.

// // SignOptions is an interface that defines the available options for token signing:
// interface SignOptions {
//   algorithm?: Algorithm;                     // The signing algorithm to use (e.g., 'HS256', 'RS256', etc.).
//   expiresIn?: string | number;               // The token expiration time in seconds or a string describing a time span (e.g., '2 days', '10h', '7d', etc.).
//   notBefore?: string | number;               // The time before which the token is not valid, similar to 'expiresIn'.
//   audience?: string | string[];              // The intended audience of the token (an array of strings or a single string).
//   issuer?: string;                           // The issuer of the token (a string).
//   jwtid?: string;                            // A unique identifier for the token (a string).
//   subject?: string;                          // The subject of the token (a string).
//   noTimestamp?: boolean;                     // If true, the 'iat' (issued at) claim will not be included in the token.
//   header?: object;                           // An object representing additional header fields for the token.
//   encoding?: string;                         // The encoding used for the secret or private key (default is 'utf8').
// }
