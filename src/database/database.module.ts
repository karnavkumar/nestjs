import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

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
  ],
})
export class DatabaseModule {
  constructor() {
    console.log('DatabaseModule', process.env.DATABASE);
  }
}
