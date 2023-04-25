import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { DependencyModule } from './di/dependency.module';
import { LoggingProvider } from './di/providers/logging.provider';
import { PersonProvider } from './di/providers/person.provider';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '',
      database: 'users',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    DependencyModule
  ],

}) 
export class AppModule {
  constructor(private readonly log: LoggingProvider,
    private readonly person: PersonProvider){
    log.loggError("this is an error msg");
    log.loggInfo("this is an error msg");
    log.loggSuccess("this is an error msg");

    console.log(person.getPerson());
  }
}
