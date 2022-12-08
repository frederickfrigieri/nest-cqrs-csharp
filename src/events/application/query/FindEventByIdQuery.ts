import { IQuery } from '@nestjs/cqrs';

export class FindEventByIdQuery implements IQuery {
  constructor(readonly id: string) {}
}
