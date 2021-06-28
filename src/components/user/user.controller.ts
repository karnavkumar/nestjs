import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create() {
    await this.userService.create();
  }

  @Get()
  async findAll(): Promise<any> {
    return this.userService.findAll();
  }
}
