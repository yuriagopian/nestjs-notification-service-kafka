import { Module } from '@nestjs/common';
import { MessagingModule } from '@infra/messaging/kafka/messaging.module';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    HttpModule,
    DatabaseModule,
    MessagingModule,
  ],
})
export class AppModule {}
