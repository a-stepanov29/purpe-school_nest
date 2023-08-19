import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Review } from './review.model';
import { SaveReviewDto } from './dto/seve-review.dto';
import { DeleteReviewDto } from './dto/delete-review.dto';
import { SuccessResponse } from '../helpers/success.response';

@Controller('review')
export class ReviewController {
  @Get('get/:productId')
  async get(@Param('productId') productId: string): Promise<Review[]> {
    console.log(productId);
    return new Promise(() => Review);
  }

  @Post('save')
  async save(@Body() dto: SaveReviewDto): Promise<Review> {
    console.log(dto);
    return new Promise(() => Review);
  }

  @Delete('delete')
  async delete(@Param('id') dto: DeleteReviewDto): Promise<SuccessResponse> {
    console.log(dto);
    return new Promise(() => SuccessResponse);
  }
}
