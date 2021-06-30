import { Model } from 'mongoose';
import { UserDocument } from '../../database/schema';
export declare class UserLoginService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    findUser(email: any): import("mongoose").Query<UserDocument, UserDocument, {}>;
}
