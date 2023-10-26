export enum Operator {
    greaterThan = 'gt',
    lessThan = 'lt',
    greaterThanEqualTo = 'gte',
    lessThanEqualTo = 'lte',
    equals = 'eq',
    in = 'in',
}
export enum QuestionType {
    multipleChoise = 'checkbox',
    singleChoise = 'radio',
    text = 'text',
}
export enum StatusCode {
    success = 200,
    serverError = 500,
    invalidSeassion = 401,
    notFound = 404,
    badRequest = 400,
    created = 201,
    pending = 202,
    noContent = 204,
    insufficientAccess = 403,
    loginTimeout = 440
}
export enum HttpMethod {
    get = "get",
    post = "post",
    put = "put",
    delete = "delete",
    head = "head"
}