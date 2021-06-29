import { Injectable, Post, Get, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../database/schema';
import { hash } from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async create(
    { username, email, password, birthdate, country, mobile },
    file
  ): Promise<User> {
    console.log('body', { username, email, password }, file);
    password = await hash(password, Number(process.env.HASH_ROUNDS) || 2);
    const createUser = new this.userModel();
    createUser.set({ username, email, password });
    return createUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
