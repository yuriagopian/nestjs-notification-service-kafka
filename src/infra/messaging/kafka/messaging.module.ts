import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [],
})
export class MessagingModule {}
