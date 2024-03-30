// user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async findUserById(userId: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id: userId },
    });
  }

  async deleteUser(userId: number): Promise<void> {
    this.userRepository.delete({
      id: userId,
    });
  }
}
