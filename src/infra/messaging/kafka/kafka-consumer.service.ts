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
          username:
            // 'Y2FwaXRhbC1yZXB0aWxlLTEyNTIwJMROBa5QmFtl8IDTxgy_bM-QTHp6l0l6Dhs' ||
            String(process.env.KAFKA_USERNAME),
          password:
            // 'X0kEBrCjB4B05TUXLpYYCqQOIM0KRFJIZi5zkCrHYf_dcM3xYCdByusx96I2dy5AofPwOw==' ||
            String(process.env.KAFKA_PASSWORD),
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
