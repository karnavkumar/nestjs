/// <reference types="multer" />
import { UserService } from './user.service';
import { SignUpUserDto } from '../../dto/signup-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getHello(): string;
    create(signUpUserDto: SignUpUserDto, picture: Express.Multer.File): Promise<any>;
    findAll(): Promise<any>;
}
