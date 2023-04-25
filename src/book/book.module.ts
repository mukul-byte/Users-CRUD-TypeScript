import { Module } from '@nestjs/common';
import { BookMockService, BookProdService } from './book.service';
import { BookController } from './book.controller';

@Module({
    controllers: [BookController],
    providers: [{ provide: "BOOK_SERVICE", useClass: process.env.NODE == "dev" ? BookMockService : BookProdService }],
    imports: []
})
export class BookModule { }
