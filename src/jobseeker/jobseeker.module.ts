import { Module } from '@nestjs/common';
import { JobseekerService } from './jobseeker.service';
import { JobseekerController } from './jobseeker.controller';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  providers: [
    JobseekerService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [JobseekerController],
})
export class JobseekerModule {}
