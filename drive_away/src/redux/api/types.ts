export interface IUser {
    name: string;
    email: string;
    avatar:string;
    role: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }
  
  export interface IGenericResponse {
    status: string;
    message: string;
  }
  