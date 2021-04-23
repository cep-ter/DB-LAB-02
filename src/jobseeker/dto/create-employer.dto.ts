import { Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateEmployerDto {
  @Length(5, 20)
  @ApiProperty({
    description: 'Enter the first_name ',
    type: 'string',
    minLength: 5,
    maxLength: 20,
  })
  readonly first_name: string;

  @Length(5, 20)
  @ApiProperty({
    description: 'Enter the last_name ',
    type: 'string',
    minLength: 5,
    maxLength: 20,
  })
  readonly last_name: string;

  @ApiProperty({ description: 'Enter username ', type: 'string' })
  readonly username: string;

  @ApiProperty({
    description: 'Enter password ',
    type: 'string',
  })
  readonly password: string;

  @ApiProperty({ description: 'Enter email ', type: 'string' })
  readonly email: string;

  @Length(15, 15)
  @ApiProperty({
    description: 'Enter password ',
    type: 'string',
    minLength: 15,
    maxLength: 15,
  })
  readonly phone_number: string;

  @ApiProperty({
    description: 'Enter the IDs of employer',
    type: 'array',
    items: { type: 'number' },
  })
  readonly projects: number[];
}
