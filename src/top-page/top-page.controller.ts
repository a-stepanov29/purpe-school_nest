import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { SaveTopPageModelDto } from './dto/save-top-page.dto';
import { DeleteTopPageDto } from './dto/delete-top-page.dto';
import { SuccessResponse } from '../helpers/success.response';
import { FindTopPageResponse } from './dto/find-top-page.response';

@Controller('top-page')
export class TopPageController {
  @Get('get/:alias')
  async get(@Param('alias') alias: string): Promise<TopPageModel> {}

  @Post('find')
  async getByCategory(@Body() dto: FindTopPageDto): Promise<FindTopPageResponse> {}

  @Post('save')
  async find(@Body() dto: SaveTopPageModelDto): Promise<TopPageModel> {}

  @Delete('delete')
  async delete(@Body() dto: DeleteTopPageDto): Promise<SuccessResponse> {}
}
