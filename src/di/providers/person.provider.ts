import { Injectable } from "@nestjs/common";

@Injectable()
export class PersonProvider{
    public getPerson(){
        return {
            name: "Rahul",
            age: 23
        }
    }
}