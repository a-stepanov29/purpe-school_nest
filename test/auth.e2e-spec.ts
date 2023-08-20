import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import mongoose from 'mongoose';
import { AuthDto } from '../src/auth/dto/auth.dto';

const loginDto: AuthDto = {
  login: 'admin@mail.ru',
  password: '12345',
};

describe('AuthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/auth/login (POST) - success', async () => {
    const { body }: request.Response = await request(app.getHttpServer())
      .post('/auth/login')
      .send(loginDto)
      .expect(200);
    expect(body.access_token).toBeDefined();
  });

  it('/auth/login (POST) - fail password', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, password: '1234' })
      .expect(401, {
        message: 'Неверный пароль',
        error: 'Unauthorized',
        statusCode: 401,
      });
  });

  it('/auth/login (POST) - fail password', async () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ ...loginDto, login: 'admi@mail.ru' })
      .expect(401, {
        message: 'Пользователь с таким email не найден',
        error: 'Unauthorized',
        statusCode: 401,
      });
  });

  afterAll(() => {
    mongoose.disconnect();
  });
});
