import { Notification } from './../../src/application/entities/notification';
import { NotificationsRepository } from "src/application/repositories/notifications-repositories";

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  
};
