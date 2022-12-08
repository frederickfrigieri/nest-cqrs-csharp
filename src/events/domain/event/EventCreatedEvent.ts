import { IEvent } from '@nestjs/cqrs';

export class EventCreatedEvent implements IEvent {
  constructor(readonly eventId: string, readonly email: string) {}
}
