import { IsEmail, IsMongoId } from 'class-validator';

export class ProfileDto {
  @IsEmail()
  username: string;

  @IsMongoId()
  _id: string;
}
