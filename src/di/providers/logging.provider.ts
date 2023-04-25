import { Injectable } from "@nestjs/common";
import {blue, green, red} from "chalk";

@Injectable()
export class LoggingProvider {
    public loggError(message: string){
        console.log(red(message));
    }
    public loggInfo(message: string){
        console.log(blue(message));
    }
    public loggSuccess(message: string){
        console.log(green(message));
    }
}
