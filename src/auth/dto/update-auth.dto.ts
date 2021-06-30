import { PartialType } from '@nestjs/swagger';
import { ProfileDto } from './profile.dto';

export class UpdateAuthDto extends PartialType(ProfileDto) {}
