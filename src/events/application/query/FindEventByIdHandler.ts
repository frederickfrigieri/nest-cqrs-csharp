import {
  Inject,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { InjectionToken } from 'src/account/application/InjectionToken';

import { ErrorMessage } from 'src/account/domain/ErrorMessage';
import { EventQuery } from './EventQuery';
import { FindEventByIdQuery } from './FindEventByIdQuery';
import { FindEventByIdResult } from './FindEventByIdResult';

@QueryHandler(FindEventByIdQuery)
export class FindEventByIdHandler
  implements IQueryHandler<FindEventByIdQuery, FindEventByIdResult>
{
  @Inject(InjectionToken.ACCOUNT_QUERY) readonly accountQuery: EventQuery;

  async execute(query: FindEventByIdQuery): Promise<FindEventByIdResult> {
    const data = await this.accountQuery.findById(query.id);
    if (!data) throw new NotFoundException(ErrorMessage.ACCOUNT_IS_NOT_FOUND);

    const dataKeys = Object.keys(data);
    const resultKeys = Object.keys(new FindEventByIdResult());

    if (dataKeys.length < resultKeys.length)
      throw new InternalServerErrorException();

    if (resultKeys.find((resultKey) => !dataKeys.includes(resultKey)))
      throw new InternalServerErrorException();

    dataKeys
      .filter((dataKey) => !resultKeys.includes(dataKey))
      .forEach((dataKey) => delete data[dataKey]);

    return data;
  }
}
