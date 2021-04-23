import { ApiProperty } from '@nestjs/swagger';

export default class CreateResumeDto {
  @ApiProperty({ description: 'Enter languages', type: 'string' })
  readonly languages: string;

  @ApiProperty({ description: 'Enter university', type: 'string' })
  readonly university: string;

  @ApiProperty({ description: 'Enter license', type: 'string' })
  readonly license: string;

  @ApiProperty({ description: 'Enter interests', type: 'string' })
  readonly interests: string;

  @ApiProperty({ description: 'Enter skills', type: 'string' })
  readonly skills: string;

  @ApiProperty({ description: 'Enter sample work', type: 'string' })
  readonly sample_work: string;

  @ApiProperty({ description: 'Enter id', type: 'number' })
  readonly freelancer: number;
}
