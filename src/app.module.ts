import { Inject, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { DependencyModule } from './di/dependency.module';
import { LoggingProvider } from './di/providers/logging.provider';
import { PersonProvider } from './di/providers/person.provider';
import {Pool} from "pg";
import { PG_DB_PROVIDER } from './di/providers/pgDB.provider';
import { BookModule } from './book/book.module';


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
    DependencyModule,
    BookModule,
  ],

}) 
export class AppModule {
  constructor(private readonly log: LoggingProvider,
    private readonly person: PersonProvider,
    @Inject("APP_CONSTANTS") private readonly constants: any,
    @Inject(PG_DB_PROVIDER)private readonly pgDBProvider: Pool
    ){
    // log.loggError("this is an error msg");
    // log.loggInfo("this is an error msg");
    // log.loggSuccess("this is an error msg");

    // console.log(person.getPerson());

    // console.log("In AppModule" + constants.DB_NAME + " " + constants.DB_PASSWORD);
  }
}
