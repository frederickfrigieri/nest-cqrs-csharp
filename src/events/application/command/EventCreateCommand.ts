import { ICommand } from '@nestjs/cqrs';

export class EventCreateCommand implements ICommand {
  constructor(readonly eventId: string) {}
}
