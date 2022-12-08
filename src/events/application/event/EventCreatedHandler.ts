import { Inject } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import {
  AccountClosed,
  IntegrationEventPublisher,
  INTEGRATION_EVENT_PUBLISHER,
  Topic,
} from 'libs/MessageModule';
import { Transactional } from 'libs/Transactional';
import { EventCreatedEvent } from 'src/events/domain/event/EventCreatedEvent';

@EventsHandler(EventCreatedEvent)
export class EventCreatedHandler implements IEventHandler<EventCreatedEvent> {
  @Inject(INTEGRATION_EVENT_PUBLISHER)
  private readonly integrationEventPublisher: IntegrationEventPublisher;

  @Transactional()
  async handle(event: EventCreatedEvent): Promise<void> {
    await this.integrationEventPublisher.publish(
      Topic.ACCOUNT_CLOSED,
      new AccountClosed(event.eventId, event.email),
    );
  }
}
