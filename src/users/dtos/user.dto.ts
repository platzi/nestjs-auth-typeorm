import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsPositive,
  IsOptional,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the email of user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty()
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly role: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly customerId: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
