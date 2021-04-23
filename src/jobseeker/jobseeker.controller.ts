import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Header,
  Delete,
  Query,
} from '@nestjs/common';
import CreateEmployerDto from './dto/create-employer.dto';

import { ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import UpdateEmployerDto from './dto/update-employer.dto';
import { Public } from '../public.decorator';
import CreateResumeDto from './dto/create-resume.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import { JobseekerService } from './jobseeker.service';
import UpdateProjectDto from './dto/update-project.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import UpdateResumeDto from './dto/update-resume.dto';

@Controller('jobseeker')
export class JobseekerController {
  constructor(private readonly jobseekerService: JobseekerService) {}

  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'Adds new employer to database' })
  @Public()
  @Post('employer/post')
  postEmployer(@Body() employer: CreateEmployerDto) {
    return this.jobseekerService.insertEmployer(employer);
  }

  @ApiResponse({ status: 200, description: 'get all the employers' })
  @ApiBearerAuth()
  @Get('employer/get')
  getAllEmployer() {
    return this.jobseekerService.getAllEmployers();
  }

  @ApiResponse({
    status: 200,
    description: 'get all projects of an employer',
  })
  @ApiQuery({
    name: 'employerId',
    required: true,
    type: Number,
    description: `id of employer`,
  })
  @ApiBearerAuth()
  @Post('employer/projects')
  getProjectsEmployer(@Query('employerId') employerId) {
    return this.jobseekerService.getProjectsOfEmployer(employerId);
  }

  @ApiResponse({ status: 200, description: 'delete an employer' })
  @ApiQuery({
    name: 'employerId',
    required: true,
    type: Number,
    description: `id of employer`,
  })
  @ApiBearerAuth()
  @Delete('employer/delete')
  deleteEmployer(@Query('employerId') employerId) {
    return this.jobseekerService.deleteEmployer(employerId);
  }

  @ApiResponse({ status: 200, description: 'update an employer' })
  @ApiBearerAuth()
  @Put('employer/update')
  updateEmployer(@Body() employer: UpdateEmployerDto) {
    return this.jobseekerService.updateEmployer(employer);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'Adds new freelancer to database' })
  @Public()
  @Post('freelancer/post')
  postFreelancer(@Body() freelancer: CreateFreelancerDto) {
    return this.jobseekerService.insertFreelancer(freelancer);
  }

  @ApiResponse({ status: 200, description: 'get all the freelancers' })
  @ApiBearerAuth()
  @Get('freelancer/get')
  getAllFreelancer() {
    return this.jobseekerService.getAllFreelancers();
  }

  @ApiResponse({
    status: 200,
    description: 'get all projects',
  })
  @ApiQuery({
    name: 'freelancerId',
    required: true,
    type: Number,
    description: `id of freelancer`,
  })
  @ApiBearerAuth()
  @Post('freelancer/projects')
  getProjectsFreelancer(@Query('freelancerId') freelancerId) {
    return this.jobseekerService.getProjectsOfFreelancer(freelancerId);
  }

  @ApiResponse({ status: 200, description: 'delete a freelancer' })
  @ApiQuery({
    name: 'freelancerId',
    required: true,
    type: Number,
    description: `id of freelancer which is being deleted`,
  })
  @ApiBearerAuth()
  @Delete('freelancer/delete')
  deleteFreelancer(@Query('freelancerId') freelancerId) {
    return this.jobseekerService.deleteFreelancer(freelancerId);
  }

  @ApiResponse({ status: 200, description: 'update a freelancer' })
  @ApiBearerAuth()
  @Put('freelancer/update')
  updateFreelancer(@Body() freelancer: UpdateFreelancerDto) {
    return this.jobseekerService.updateFreelancer(freelancer);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'Adds new resume to database' })
  @ApiBearerAuth()
  @Post('resume/post')
  postResume(@Body() resume: CreateResumeDto) {
    return this.jobseekerService.insertResume(resume);
  }

  @ApiResponse({ status: 200, description: 'get all the resumes' })
  @ApiBearerAuth()
  @Get('resume/get')
  getAllResume() {
    return this.jobseekerService.getAllResumes();
  }

  @ApiResponse({ status: 200, description: 'delete a resume' })
  @ApiQuery({
    name: 'resumeId',
    required: true,
    type: Number,
    description: `id of resume which is being deleted`,
  })
  @ApiBearerAuth()
  @Delete('resume/delete')
  deleteResume(@Query('resumeId') resumeId) {
    return this.jobseekerService.deleteResume(resumeId);
  }

  @ApiResponse({ status: 200, description: 'update a resume' })
  @ApiBearerAuth()
  @Put('resume/update')
  updateResume(@Body() resume: UpdateResumeDto) {
    return this.jobseekerService.updateResume(resume);
  }

  @Header('Content-Type', 'application/json')
  @ApiResponse({ status: 200, description: 'Adds new project to database' })
  @ApiBearerAuth()
  @Post('project/post')
  postProject(@Body() project: CreateProjectDto) {
    return this.jobseekerService.insertProject(project);
  }

  @ApiResponse({ status: 200, description: 'get all the projects' })
  @ApiBearerAuth()
  @Get('project/get')
  getAllProject() {
    return this.jobseekerService.getAllProjects();
  }

  @ApiResponse({ status: 200, description: 'delete a project' })
  @ApiQuery({
    name: 'ProjectID',
    required: true,
    type: Number,
    description: `id of project which is being deleted`,
  })
  @ApiBearerAuth()
  @Delete('project/delete')
  deleteProject(@Query('ProjectID') ProjectID) {
    return this.jobseekerService.deleteProject(ProjectID);
  }

  @ApiResponse({ status: 200, description: 'update a project' })
  @ApiBearerAuth()
  @Put('project/update')
  updateProject(@Body() project: UpdateProjectDto) {
    return this.jobseekerService.updateProject(project);
  }
}
