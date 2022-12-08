import { FindEventByIdResult } from "./FindEventByIdResult";
import { FindEventsQuery } from "./FindEventsQuery";
import { FindEventsResult } from "./FindEventsResult";

export interface EventQuery {
  findById: (id: string) => Promise<FindEventByIdResult | null>;
  find: (query: FindEventsQuery) => Promise<FindEventsResult>;
}
