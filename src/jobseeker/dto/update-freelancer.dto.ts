import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class UpdateFreelancerDto {
  @ApiProperty({ description: 'Enter ID', type: 'number' })
  readonly id: number;

  @Length(5, 20)
  @ApiProperty({
    description: 'Enter the first_name',
    type: 'string',
    minLength: 5,
    maxLength: 10,
  })
  readonly first_name: string;

  @Length(5, 20)
  @ApiProperty({
    description: 'Enter the last_name',
    type: 'string',
    minLength: 5,
    maxLength: 10,
  })
  readonly last_name: string;

  @ApiProperty({
    description: 'Enter username',
    type: 'string',
  })
  readonly username: string;

  @ApiProperty({
    description: 'Enter password',
    type: 'string',
  })
  readonly password: string;

  @ApiProperty({ description: 'Enter email', type: 'string' })
  readonly email: string;

  @Length(15, 15)
  @ApiProperty({
    description: 'Enter password',
    type: 'string',
    minLength: 15,
    maxLength: 15,
  })
  readonly phone_number: string;

  @ApiProperty({ description: 'Enter score', type: 'string' })
  readonly score: string;

  @ApiProperty({
    description: 'Enter account type of freelancer',
    type: 'string',
  })
  readonly account_type: string;

  @ApiProperty({
    description: 'Enter the resume id of freelancer',
    type: 'number',
  })
  readonly resume: number;

  @ApiProperty({
    description: 'Enter the IDs of freelancers',
    type: 'array',
    items: { type: 'number' },
  })
  readonly projects: number[];
}
