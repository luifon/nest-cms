// mongo.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './mongo-config.service'; // Example service to load configuration

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongoConfigService, // Use a service to load configuration asynchronously
    }),
  ],
})
export class MongoModule {}
