import { IQueryResult } from '@nestjs/cqrs';

export class FindEventsResult implements IQueryResult {
  constructor(
    readonly events: Readonly<{
      id: string;
    }>[],
  ) { }
}
