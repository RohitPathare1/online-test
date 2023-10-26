import { StatusCode } from "../enum/enum";

export class Result {
    constructor(
        public data?: any,
        public message: string = '',
        public statusCode: StatusCode = StatusCode.success,
        public success: boolean = false,
    ) { }

    public static success(data?: any, message?: string, statusCode: StatusCode = StatusCode.success): any {
        return new Result(data, message, statusCode, true);
    }

    public static error(message: string, data?: any, statusCode: StatusCode = StatusCode.serverError): any {
        return new Result(data, message, statusCode, false);
    }
}