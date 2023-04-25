import { Module } from '@nestjs/common';
import { LoggingProvider } from './providers/logging.provider';
import { PersonProvider } from './providers/person.provider';

@Module({
  controllers: [],
  providers: [LoggingProvider, PersonProvider],
  imports: [],
  exports: [LoggingProvider, PersonProvider]
})
export class DependencyModule { 
  constructor(private readonly log: LoggingProvider,
              private readonly person: PersonProvider){
    log.loggError("this is an error msg");
    log.loggInfo("this is an error msg");
    log.loggSuccess("this is an error msg");

    console.log(person.getPerson());
  }
}
