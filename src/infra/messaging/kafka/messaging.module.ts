import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { KafkaConsumerService } from './kafka-consumer.service';
import { NotificationController } from './controllers/notification.controller';
import { SendNotification } from '@application/use-cases/send-notification';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
})
export class MessagingModule {}
