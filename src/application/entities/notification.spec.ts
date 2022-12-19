import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a a notification', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade enviada'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
