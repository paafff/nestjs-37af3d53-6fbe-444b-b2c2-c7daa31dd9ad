import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email address of the user',
    format: 'email',
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: 'password123',
    description: 'Password for the user account',
    minLength: 6,
  })
  password: string;

  @IsString()
  @ApiProperty({
    example: 'John',
    description: 'First name of the user',
  })
  firstName: string;

  @IsString()
  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the user',
  })
  lastName: string;

  @IsString()
  @ApiProperty({
    example: '+1234567890',
    description: 'Phone number of the user',
  })
  phone: string;

  @IsString()
  @ApiProperty({
    example: 'Manager',
    description: 'Position of the user',
  })
  position: string;

  @IsString()
  @ApiProperty({
    example: 'johndoe',
    description: 'Username for the user account',
  })
  username: string;
}
