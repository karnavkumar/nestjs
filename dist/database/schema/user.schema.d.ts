import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    username: string;
    email: string;
    password: string;
    picture: string;
    birthdate: Date;
    breed: string;
    country: string;
    mobile: number;
    is_deleted: boolean;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, any>, import("mongoose").Model<any, any, any>, undefined, any>;
