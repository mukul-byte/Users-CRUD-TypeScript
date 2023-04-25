import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Inject } from '@nestjs/common';
import { BookMockService, BookProdService } from './book.service';


@Controller('book')
export class BookController {
    //TODO: this conditional statement is not working, dont know why
    constructor(@Inject("BOOK_SERVICE") private readonly bookService: BookProdService | BookMockService) { }

    @Get()
    getBooks(): string {
        return this.bookService.getBooks();
    }
}
