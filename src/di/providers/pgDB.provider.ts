import { Injectable } from "@nestjs/common";
import {Pool} from "pg";

export const PG_DB_PROVIDER = "PG_DB_PROVIDER";

export const pgDbProvider = {
    provide: PG_DB_PROVIDER,
    useValue : new Pool({
      user: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '',
      database: 'users',
    })
}