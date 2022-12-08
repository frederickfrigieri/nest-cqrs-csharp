import { IQueryResult } from '@nestjs/cqrs';

export class FindEventByIdResult implements IQueryResult {
  readonly id: string;
  readonly name: string;
  readonly balance: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly deletedAt: Date | null;
}
