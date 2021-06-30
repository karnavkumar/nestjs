import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../database/schema/user.schema';
import { UserLoginService } from './user-login.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [UserLoginService],
  exports: [UserLoginService],
})
export class UserLoginModule {}
