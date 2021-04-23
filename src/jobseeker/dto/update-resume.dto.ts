import { ApiProperty } from '@nestjs/swagger';

export default class UpdateResumeDto {
  @ApiProperty({ description: 'Enter the ID of the resume', type: 'number' })
  readonly id: number;

  @ApiProperty({
    description: 'Enter the languages',
    type: 'string',
  })
  readonly languages: string;

  @ApiProperty({
    description: 'Enter the university',
    type: 'string',
  })
  readonly university: string;

  @ApiProperty({ description: 'Enter license', type: 'string' })
  readonly license: string;

  @ApiProperty({ description: 'Enter interests', type: 'string' })
  readonly interests: string;

  @ApiProperty({ description: 'Enter skills', type: 'string' })
  readonly skills: string;

  @ApiProperty({ description: 'Enter sample work', type: 'string' })
  readonly sample_work: string;

  @ApiProperty({ description: 'Enter id of owner', type: 'number' })
  readonly freelancer: number;
}
