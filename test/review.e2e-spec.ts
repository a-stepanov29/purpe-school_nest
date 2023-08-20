import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { CreateReviewDto } from '../src/review/dto/create-review.dto';
import mongoose, { Types } from 'mongoose';
import { REVIEW_NOT_FOUND } from '../src/review/review.constants';

const productId = new Types.ObjectId().toHexString();

const testDto: CreateReviewDto = {
  name: 'Тест',
  title: 'Заголовок',
  description: 'Описание тестовое',
  rating: 5,
  productId,
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createdId: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/review/create (POST) - success', async () => {
    const { body }: request.Response = await request(app.getHttpServer())
      .post('/review/create')
      .send(testDto)
      .expect(201);

    createdId = body._id;
    expect(createdId).toBeDefined();
  });

  it('/review/by-product/:productId (GET) - success', async () => {
    const { body }: request.Response = await request(app.getHttpServer())
      .get('/review/by-product/' + productId)
      .expect(200);
    expect(body.length).toBe(1);
  });

  it('/review/by-product/:productId (GET) - fail', async () => {
    const { body }: request.Response = await request(app.getHttpServer())
      .get('/review/by-product/' + new Types.ObjectId().toHexString())
      .expect(200);
    expect(body.length).toBe(0);
  });

  it('/review/:id (DELETE) - success', () => {
    return request(app.getHttpServer())
      .delete('/review/' + createdId)
      .expect(200);
  });

  it('/review/:id (DELETE) - fail', () => {
    return request(app.getHttpServer())
      .delete('/review/' + new Types.ObjectId().toHexString())
      .expect(404, {
        statusCode: 404,
        message: REVIEW_NOT_FOUND,
      });
  });

  afterAll(() => {
    mongoose.disconnect();
  });
});
