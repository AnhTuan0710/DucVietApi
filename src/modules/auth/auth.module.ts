import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../user/user.module';
import { jwtConstants } from '../../constants/auth';
import { AppController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '30 days' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  exports: [AuthService],
  controllers: [AppController]
})
export class AuthModule { }
