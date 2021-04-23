import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Length, IsOptional, Min, IsNumber } from 'class-validator';

export class PersonDto {
  @Length(5, 20)
  @ApiProperty({
    description: 'Enter Your Name',
    minLength: 5,
    default: 'Ali',
    maxLength: 20,
  })
  name: string;

  @IsNumber()
  @IsOptional()
  @Min(1960)
  @ApiPropertyOptional({
    description: 'Optional',
    default: 1998,
    minimum: 1960,
  })
  year: number;
}
