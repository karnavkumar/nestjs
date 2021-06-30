import { AuthService } from './auth/auth.service';
import { UserLoginDto } from './auth/dto/user-login.dto';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any, userLoginDto: UserLoginDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
