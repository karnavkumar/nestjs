import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { compare } from 'bcrypt';
import { Strategy } from 'passport-local';
import { UserLoginService } from '../components/user-login/user-login.service';
import { User } from '../database/schema/user.schema';
@Injectable()
export class AuthService extends PassportStrategy(Strategy) {
  constructor(
    private readonly userLoginService: UserLoginService,
    private jwtService: JwtService
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validateUser(email: string, password: string): Promise<User> {
    console.log('userLoginDto', { email, password });
    try {
      const user = await this.userLoginService.findUser(email);
      if (user && user.password) {
        if (await compare(password, user.password)) {
          return user;
        }
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }

  async login({ email, _id, username }) {
    return {
      access_token: this.jwtService.sign({ payload: { email, _id, username } }),
    };
  }
}
