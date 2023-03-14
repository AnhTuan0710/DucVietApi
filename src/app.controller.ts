import { Public } from './constants/auth';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Public()
  @Get()
  findAll() {
    return [];
  }
}
