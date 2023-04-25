import { Injectable } from "@nestjs/common";

@Injectable()
export class BookMockService {
    getBooks() {
        return "This is a Mock book service";
    }
}

@Injectable()
export class BookProdService {
    getBooks() {
        return "This is a Prod book service";
    }
}