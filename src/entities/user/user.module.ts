import { Module } from '@nestjs/common';
import { UsersController as UsersController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
