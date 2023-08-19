import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPage } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: TopPage) {
    console.log(dto);
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    console.log(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    console.log(id);
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopPage) {
    console.log(id, dto);
  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {
    console.log(dto);
  }
}
