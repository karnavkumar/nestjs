import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: Types.ObjectId })
  _id: string;

  @Prop()
  name: string;

  @Prop({ required: true })
  username: string;

  @Prop({
    index: true,
    trim: true,
    lowercase: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    unique: true,
    required: [true, 'Email address required.'],
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

  @Prop({ type: Types.ObjectId })
  country: string;

  @Prop()
  mobile: number;

  @Prop({ default: false })
  is_deleted: boolean;
}

function validateEmail(email: string) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

export const UserSchema = SchemaFactory.createForClass(User);
