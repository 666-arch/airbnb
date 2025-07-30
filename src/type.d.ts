declare interface RouteObject {
    path?: string;
    element?: React.ReactNode;
    children?: RouteObject[]
}
declare interface ResponseMessage {
    code: number | string;
    msg: string;
}
declare type GoodPriceChildInfo = {
    name: string;
    picture_url?: string;
    price?: number;
    price_format?: string;
    reviews_count?: number;
    star_rating?: number;
    verify_info?: {
        messages: Array<string>
        text_color?: string;
    }
}
declare interface IGoodPriceInfoList {
    title: string;
    list: Array<GoodPriceChildInfo>
}