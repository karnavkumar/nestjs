import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  Length,
  IsNumberString,
  IsOptional,
  MinLength,
} from 'class-validator';

export class SignUpUserDto {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsNumberString()
  @Length(10, 12)
  mobile: string;

  @ApiProperty({ required: false })
  country: string;

  @ApiProperty({ required: false })
  birthdate: Date;

  @ApiProperty({ required: false, type: 'string', format: 'binary' })
  picture: any;
}
