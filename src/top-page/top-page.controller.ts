import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { SaveTopPageModelDto } from './dto/save-top-page.dto';
import { DeleteTopPageDto } from './dto/delete-top-page.dto';
import { SuccessResponse } from '../helpers/success.response';
import { FindTopPageResponse } from './dto/find-top-page.response';
import { ConfigService } from '@nestjs/config';
import { ReviewModel } from '../review/review.model';

@Controller('top-page')
export class TopPageController {
  constructor(private readonly configService: ConfigService) {}

  @Get('get/:alias')
  async get(@Param('alias') alias: string): Promise<TopPageModel> {
    console.log(alias);
    return new Promise(() => TopPageModel);
  }

  @Post('find')
  async getByCategory(@Body() dto: FindTopPageDto): Promise<FindTopPageResponse> {
    console.log(dto);
    return new Promise(() => FindTopPageResponse);
  }

  @Post('save')
  async find(@Body() dto: SaveTopPageModelDto): Promise<TopPageModel> {
    console.log(dto);
    return new Promise(() => TopPageModel);
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteTopPageDto): Promise<SuccessResponse> {
    console.log(dto);
    return new Promise(() => SuccessResponse);
  }
}
