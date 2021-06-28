import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchemaModule } from './schema';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: `mongodb://${process.env.DATABASE_URL || 'localhost'}:${
          process.env.DATABASE_PORT || 27017
        }/${process.env.DATABASE || 'nest'}`,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }),
    }),
    UserSchemaModule,
  ],
})
export class DatabaseModule {
  constructor() {
    console.log('process.env', process.env.DATABASE);
  }
}
