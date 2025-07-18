declare interface RouteObject {
    path?: string;
    element?: React.ReactNode;
    children?: RouteObject[]
}
declare interface ResponseMessage {
    code: number | string;
    msg: string;
}