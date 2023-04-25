import { Inject, Module } from '@nestjs/common';
import { LoggingProvider } from './providers/logging.provider';
import { PersonProvider } from './providers/person.provider';

const CONSTANTS = {
  DB_NAME: "Users",
  DB_PASSWORD: "admin@123"
}

@Module({
  controllers: [],
  providers: [LoggingProvider, PersonProvider,
    {useValue:CONSTANTS, provide: "APP_CONSTANTS"}
  ],
  imports: [],
  exports: [LoggingProvider, PersonProvider, "APP_CONSTANTS"]
})
export class DependencyModule {
  constructor(private readonly log: LoggingProvider,
    private readonly person: PersonProvider,
    @Inject("APP_CONSTANTS") private readonly constants: any
    ) {
    log.loggError("this is an error msg");
    log.loggInfo("this is an error msg");
    log.loggSuccess("this is an error msg");

    console.log(person.getPerson());
    console.log(constants.DB_NAME + " " + constants.DB_PASSWORD);
  }
}
