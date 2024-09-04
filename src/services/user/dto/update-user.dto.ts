import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email address of the user',
    format: 'email',
    required: false,
  })
  email?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'password123',
    description: 'Password for the user account',
    minLength: 6,
    required: false,
  })
  password?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'John',
    description: 'First name of the user',
    required: false,
  })
  firstName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the user',
    required: false,
  })
  lastName?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: '+1234567890',
    description: 'Phone number of the user',
    required: false,
  })
  phone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'Manager',
    description: 'Position of the user',
    required: false,
  })
  position?: string;
}
