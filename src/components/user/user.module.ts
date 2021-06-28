import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
// import { UserSchemaModule } from '../../database/schema';
@Module({
  // imports: [UserSchemaModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
