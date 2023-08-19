import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { SaveReviewDto } from './dto/seve-review.dto';
import { DeleteReviewDto } from './dto/delete-review.dto';
import { SuccessResponse } from '../helpers/success.response';

@Controller('review')
export class ReviewController {
  @Get('get/:productId')
  async get(@Param('productId') productId: string): Promise<ReviewModel[]> {
    console.log(productId);
    return new Promise(() => ReviewModel);
  }

  @Post('save')
  async save(@Body() dto: SaveReviewDto): Promise<ReviewModel> {
    console.log(dto);
    return new Promise(() => ReviewModel);
  }

  @Delete('delete')
  async delete(@Param('id') dto: DeleteReviewDto): Promise<SuccessResponse> {
    console.log(dto);
    return new Promise(() => SuccessResponse);
  }
}
