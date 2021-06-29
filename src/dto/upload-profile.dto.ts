import { ApiProperty } from '@nestjs/swagger';

export class UploadProfileDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
