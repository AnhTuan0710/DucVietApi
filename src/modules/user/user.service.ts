import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersService: Repository<User>
  ) { }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersService.findOne({ where: { name: username } });
  }

  async regiter(user: User): Promise<User> {
    return await this.usersService.save(user)
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.usersService.findOne({ where: { email: email } });
  }

}