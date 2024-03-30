import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUser(@Body() userData: CreateUserDto): Promise<User> {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  async findUserById(@Param('id') userId: number): Promise<User> {
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Delete(':id')
  async deleteById(@Param('id') userId: number): Promise<void> {
    this.userService.deleteUser(userId);
  }
}
