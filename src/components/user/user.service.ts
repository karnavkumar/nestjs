import { Injectable, Post, Get, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../database/schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  async create({ username, email, password }, file): Promise<User> {
    console.log('body', { username, email, password }, file);
    const createdCat = new this.userModel();
    createdCat.set({ username, email, password });
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
