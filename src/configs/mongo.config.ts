import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export async function getMongoConfig(configService: ConfigService): Promise<MongooseModuleOptions> {
  return {
    uri: getMongoUrl(configService),
  };
}

function getMongoUrl(configService: ConfigService) {
  const login = configService.get('MONGO_LOGIN');
  const password = configService.get('MONGO_PASSWORD');
  const host = configService.get('MONGO_HOST');
  const port = configService.get('MONGO_PORT');
  const nameDb = configService.get('MONGO_AUTHDB');
  return `mongodb://${login}:${password}@${host}:${port}/${nameDb}`;
}
