import { Injectable } from '@nestjs/common';
import { Review, ReviewDocument } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

class DeleteResult {
  deletedCount: number;
}

@Injectable()
export class ReviewService {
  constructor(@InjectModel(Review.name) private readonly reviewModel: Model<Review>) {}

  async create(dto: CreateReviewDto): Promise<ReviewDocument> {
    return this.reviewModel.create(dto);
  }

  async delete(id: string): Promise<ReviewDocument> | null {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  async deleteByProduct(productId: string): Promise<DeleteResult> {
    return this.reviewModel.deleteMany({ productId }).exec();
  }

  async findByProductId(productId: string): Promise<ReviewDocument[]> {
    return this.reviewModel.find({ productId }).exec();
  }
}
