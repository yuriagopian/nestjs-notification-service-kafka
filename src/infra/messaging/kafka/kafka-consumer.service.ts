import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { config } from 'dotenv';
config();
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService();

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['capital-reptile-12520-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: String(process.env.KAFKA_USERNAME),
          password: String(process.env.KAFKA_USERNAME),
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
