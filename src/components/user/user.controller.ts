import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
// import { User, UserDocument } from '../../database/schema/user.schema';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { SignUpUserDto } from './dto/signup-user.dto';
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello() {
    return 'Hello from users';
  }

  @Post('signup')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'picture', maxCount: 1 }]))
  async create(@Body() signUpUserDto: SignUpUserDto) {
    try {
      await this.userService.create(signUpUserDto);
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  async findAll(): Promise<any> {
    return this.userService.findAll();
  }
}
