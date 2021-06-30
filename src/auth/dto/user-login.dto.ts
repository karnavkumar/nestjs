import { IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserLoginDto {
  @ApiProperty({
    description: 'user@user.com',
  })
  @IsEmail()
  username: string;

  @ApiProperty({
    description: 'userAdmin',
  })
  @MinLength(8)
  password: string;
}
