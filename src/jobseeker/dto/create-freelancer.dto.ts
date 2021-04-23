import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateFreelancerDto {
  @Length(5, 20)
  @ApiProperty({
    description: 'Enter the first_name',
    type: 'string',
    minLength: 5,
    maxLength: 20,
  })
  readonly first_name: string;

  @Length(5, 20)
  @ApiProperty({
    description: 'Enter the last_name',
    type: 'string',
    minLength: 5,
    maxLength: 20,
  })
  readonly last_name: string;

  @ApiProperty({
    description: 'Enter username of the freelancer',
    type: 'string',
  })
  readonly username: string;

  @ApiProperty({
    description: 'Enter password of the freelancer',
    type: 'string',
  })
  readonly password: string;

  @ApiProperty({ description: 'Enter email of the freelancer', type: 'string' })
  readonly email: string;

  @Length(11, 11)
  @ApiProperty({
    description: 'Enter password of the freelancer',
    type: 'string',
    minLength: 11,
    maxLength: 11,
  })
  readonly phone_number: string;

  @ApiProperty({ description: 'Enter score of the freelancer', type: 'string' })
  readonly score: string;

  @ApiProperty({
    description: 'Enter account type of the freelancer',
    type: 'string',
  })
  readonly account_type: string;

  @ApiProperty({
    description: "Enter the resume id of freelancer' >",
    type: 'number',
  })
  readonly resume: number;

  @ApiProperty({
    description: "Enter the IDs of freelancer's projects >",
    type: 'array',
    items: { type: 'number' },
  })
  readonly projects: number[];
}
