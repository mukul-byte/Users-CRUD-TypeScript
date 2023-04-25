import { Module } from '@nestjs/common';
import { BookMockService, BookProdService } from './book.service';
import { BookController } from './book.controller';

@Module({
    controllers: [BookController],
    //here we have used useClass and not useValue
    providers: [{ provide: "BOOK_SERVICE", useClass: process.env.NODE_ENV == "dev" ? BookMockService : BookProdService}],
    imports: []
})
export class BookModule { }
