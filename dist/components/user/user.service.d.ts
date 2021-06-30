import { Model } from 'mongoose';
import { User, UserDocument } from '../../database/schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    findUser(email: any): import("mongoose").Query<UserDocument, UserDocument, {}>;
    create({ username, email, password, birthdate, country, mobile }: {
        username: any;
        email: any;
        password: any;
        birthdate: any;
        country: any;
        mobile: any;
    }, file: any): Promise<User>;
    findAll(): Promise<User[]>;
}
