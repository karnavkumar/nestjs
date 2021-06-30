import { JwtService } from '@nestjs/jwt';
import { Strategy } from 'passport-local';
import { UserLoginService } from '../components/user-login/user-login.service';
import { User } from '../database/schema/user.schema';
declare const AuthService_base: new (...args: any[]) => Strategy;
export declare class AuthService extends AuthService_base {
    private readonly userLoginService;
    private jwtService;
    constructor(userLoginService: UserLoginService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<User>;
    login({ email, _id, username }: {
        email: any;
        _id: any;
        username: any;
    }): Promise<{
        access_token: string;
    }>;
}
export {};
