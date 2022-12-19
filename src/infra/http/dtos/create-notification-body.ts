import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 500)
  content: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}
