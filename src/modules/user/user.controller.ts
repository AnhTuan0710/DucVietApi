import { UsersService } from './user.service';
import { Controller, Request, UseGuards, Get, Body, Post } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { User } from '../../models/user.entity';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) { }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
  @Post('register')
  create(@Body () user: User) {
    return this.userService.regiter(user)
  }
}