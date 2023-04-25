import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Inject } from '@nestjs/common';
import { BookMockService, BookProdService } from './book.service';


@Controller('book')
export class BookController {
    constructor(@Inject("BOOK_SERVICE") private readonly bookService: BookMockService | BookProdService) { }

    @Get()
    getBooks(): string {
        return this.bookService.getBooks();
    }
}
