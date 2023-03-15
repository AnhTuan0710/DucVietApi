import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './modules/task/task.module';
import { CategoryModule } from './modules/category/category.module';
import { ProductModule } from './modules/product/product.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/user/user.module';
import { User } from './models/user.entity';
import { Task } from './models/task.entity';
import { Product } from './models/product.entity';
import { Category } from './models/category.entity';
import { DATABASE } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: DATABASE.TYPE,
      host: DATABASE.HOST,
      port: DATABASE.PORT,
      username: DATABASE.USER_NAME,
      password: DATABASE.PASSWORD,
      database: DATABASE.DATABASE,
      entities: [User, Task, Product, Category],
      synchronize: true,
    }),
    TaskModule,
    CategoryModule,
    ProductModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule { }