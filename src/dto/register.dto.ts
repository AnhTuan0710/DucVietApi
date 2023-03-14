import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'email',
    example: 'long',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'plan',
    example: 'long',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'plan',
    example: 'long',
  })
  password: string;
}
