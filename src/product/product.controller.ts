import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from './product.model';
import { FindProductDto } from './dto/find-product.dto';
import { SaveProductDto } from './dto/save-product.dto';
import { DeleteProductDto } from './dto/delete-product.tdo';
import { SuccessResponse } from '../helpers/success.response';

@Controller('product')
export class ProductController {
  @Get('get/:id')
  async get(@Param('id') id: string): Promise<Product> {
    console.log(id);
    return new Promise(() => Product);
  }

  @Post('find')
  async getByCategory(@Body() dto: FindProductDto): Promise<Product[]> {
    console.log(dto);
    return new Promise(() => Product);
  }

  @Post('save')
  async save(@Body() dto: SaveProductDto): Promise<Product> {
    console.log(dto);
    return new Promise(() => Product);
  }

  @Delete('delete')
  async delete(@Body() dto: DeleteProductDto): Promise<SuccessResponse> {
    console.log(dto);
    return new Promise(() => Product);
  }
}
