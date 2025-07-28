declare interface RouteObject {
    path?: string;
    element?: React.ReactNode;
    children?: RouteObject[]
}
declare interface ResponseMessage {
    code: number | string;
    msg: string;
}
type GoodPriceChildInfo = {
    name: string;
    picture_url: string;
    price: number;
    price_format: string;
    reviews_count: number;
}
declare interface IGoodPriceInfoList {
    title: string;
    list: Array<GoodPriceChildInfo>
}