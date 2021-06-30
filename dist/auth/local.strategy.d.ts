import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<UserLoginDto>;
}
export {};
