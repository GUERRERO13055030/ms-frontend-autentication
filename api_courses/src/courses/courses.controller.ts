import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DeleteCourseDto } from './dto/delete-course.dto';
import { GetCourseDto } from './dto/get-course.dto';
import { Course } from './schemas/course.schema';

@ApiTags('Courses')
@Controller('cursos')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new course' })
  @ApiResponse({ status: 201, description: 'The course has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all courses' })
  @ApiResponse({ status: 200, description: 'Return all courses.' })
  findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':codigo')
  @ApiOperation({ summary: 'Get a course by code' })
  @ApiResponse({ status: 200, description: 'Return the course.' })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  findOne(@Param('codigo') codigo: string): Promise<Course> {
    return this.coursesService.findOneByCode(codigo);
  }

  @Put(':codigo')
  @ApiOperation({ summary: 'Update a course by code (full update)' })
  @ApiResponse({ status: 200, description: 'The course has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  update(
    @Param('codigo') getCourseDto: GetCourseDto,
    @Body() updateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    return this.coursesService.updateByCode(getCourseDto.codigo, updateCourseDto);
  }

  @Patch(':codigo')
  @ApiOperation({ summary: 'Update a course by code (partial update)' })
  @ApiResponse({ status: 200, description: 'The course has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  patch(
    @Param('codigo') getCourseDto: GetCourseDto,
    @Body() updateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    return this.coursesService.patchByCode(getCourseDto.codigo, updateCourseDto);
  }

  @Delete(':codigo')
  @ApiOperation({ summary: 'Delete a course by code' })
  @ApiResponse({ status: 200, description: 'The course has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Course not found.' })
  remove(@Param('codigo') deleteCourseDto: DeleteCourseDto): Promise<Course> {
    return this.coursesService.removeByCode(deleteCourseDto.codigo);
  }
} 