import { ApiProperty } from '@nestjs/swagger';

export default class UpdateProjectDto {
  @ApiProperty({ description: 'Enter the ID', type: 'number' })
  readonly id: number;

  @ApiProperty({ description: 'Enter the title', type: 'string' })
  readonly title: string;

  @ApiProperty({ description: 'Enter the subject', type: 'string' })
  readonly subject: string;

  @ApiProperty({ description: 'Enter priority', type: 'string' })
  readonly priority: string;

  @ApiProperty({ description: 'Enter size', type: 'string' })
  readonly size: string;

  @ApiProperty({ description: 'Enter description', type: 'string' })
  readonly description: string;

  @ApiProperty({
    description: 'Enter skills',
    type: 'string',
  })
  readonly skills: string;

  @ApiProperty({ description: 'Enter the ID of the employer', type: 'number' })
  readonly employer: number;

  @ApiProperty({ description: 'Enter the ID of freelancer', type: 'number' })
  readonly freelancer: number;
}
