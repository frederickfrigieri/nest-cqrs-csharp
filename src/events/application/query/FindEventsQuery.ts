import { IQuery } from '@nestjs/cqrs';

export class FindEventsQuery implements IQuery {
  readonly skip: number;
  readonly take: number;

  constructor(options: FindEventsQuery) {
    Object.assign(this, options);
  }
}
