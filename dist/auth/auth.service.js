"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const bcrypt_1 = require("bcrypt");
const passport_local_1 = require("passport-local");
const user_login_service_1 = require("../components/user-login/user-login.service");
let AuthService = class AuthService extends passport_1.PassportStrategy(passport_local_1.Strategy) {
    constructor(userLoginService, jwtService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
        this.userLoginService = userLoginService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        console.log('userLoginDto', { email, password });
        try {
            const user = await this.userLoginService.findUser(email);
            if (user && user.password) {
                if (await bcrypt_1.compare(password, user.password)) {
                    return user;
                }
            }
            return null;
        }
        catch (error) {
            console.log(error);
        }
    }
    async login({ email, _id, username }) {
        return {
            access_token: this.jwtService.sign({ payload: { email, _id, username } }),
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_login_service_1.UserLoginService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map