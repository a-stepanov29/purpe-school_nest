import { ITelegramOptions } from '../telegram/telegram.interface';
import { ConfigService } from '@nestjs/config';

export function getTelegramConfig(configService: ConfigService): ITelegramOptions {
  const token = configService.get('TELEGRAM_TOKEN');
  if (!token) {
    throw new Error('TELEGRAM_TOKEN не задан');
  }

  return {
    token,
    chatId: configService.get('CHAT_ID') ?? '',
  };
}
