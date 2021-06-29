import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop({ required: true })
  username: string;

  @Prop({
    lowercase: true,
    required: [true, "can't be blank"],
    createIndexes: true,
    unique: true,
  })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  picture: string;

  @Prop()
  birthdate: Date;

  @Prop()
  breed: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
