import { Inject, NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { Transactional } from 'libs/Transactional';

import { InjectionToken } from 'src/account/application/InjectionToken';

import { ErrorMessage } from 'src/account/domain/ErrorMessage';
import { EventCreateCommand } from './EventCreateCommand';

@CommandHandler(EventCreateCommand)
export class CloseAccountHandler
  implements ICommandHandler<EventCreateCommand, void>
{
  @Inject(InjectionToken.ACCOUNT_REPOSITORY)
  private readonly accountRepository: AccountRepository;

  @Transactional()
  async execute(command: EventCreateCommand): Promise<void> {
    // const account = await this.accountRepository.findById(command.accountId);
    // if (!account)
    //   throw new NotFoundException(ErrorMessage.ACCOUNT_IS_NOT_FOUND);

    // account.close();

    // await this.accountRepository.save(account);

    // account.commit();
  }
}
