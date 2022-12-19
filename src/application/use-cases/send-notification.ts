import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { NotificationsRepository } from '../repositories/notifications-repositories';
import { Notification } from './../entities/notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse{
  notification: Notification;
}

@Injectable()
export class SendNotification{
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest
    ): Promise<SendNotificationResponse>{
    const { recipientId, content, category } = request

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    }
  }
}