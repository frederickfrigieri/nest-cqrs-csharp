import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { InjectionToken } from 'src/account/application/InjectionToken';
import { EventQuery } from './EventQuery';
import { FindEventsQuery } from './FindEventsQuery';
import { FindEventsResult } from './FindEventsResult';

@QueryHandler(FindEventsQuery)
export class FindEventsHandler
  implements IQueryHandler<FindEventsQuery, FindEventsResult>
{
  @Inject(InjectionToken.ACCOUNT_QUERY) readonly accountQuery: EventQuery;

  async execute(query: FindEventsQuery): Promise<FindEventsResult> {
    return this.accountQuery.find(query);
  }
}
