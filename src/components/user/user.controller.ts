import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { SignUpUserDto } from '../../dto/signup-user.dto';
import { ApiConsumes } from '@nestjs/swagger';
@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello() {
    return 'Hello from users';
  }

  @Post('signup')
  @UseInterceptors(FileInterceptor('picture'))
  @ApiConsumes('multipart/form-data')
  async create(
    @Body() signUpUserDto: SignUpUserDto,
    @UploadedFile() picture: Express.Multer.File
  ) {
    console.log('here', picture);

    try {
      await this.userService.create(signUpUserDto, picture);
    } catch (error) {
      return error.message;
    }
  }

  @Get(':id')
  async findAll(): Promise<any> {
    return this.userService.findAll();
  }
}
