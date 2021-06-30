import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../database/schema';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>
  ) {}

  findUser(email) {
    return this.userModel.findOne({ email });
  }

  async create(
    { username, email, password, birthdate, country, mobile },
    file
  ): Promise<User> {
    console.log(
      'body',
      { username, email, password, birthdate, country, mobile },
      file
    );
    password = await hash(password, Number(process.env.HASH_ROUNDS) || 2);
    const createUser = new this.userModel();
    createUser.set({ username, email, password, birthdate, country, mobile });
    return createUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }
}
