import {IsNumber, IsString} from "class-validator";

class ResponseDTO {
    @IsString()
    message: string;

    @IsNumber()
    status: number;

    data?: any;
}