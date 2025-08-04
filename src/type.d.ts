declare interface RouteObject {
    path?: string;
    element?: React.ReactNode;
    children?: RouteObject[]
}
declare interface ResponseMessage {
    code: number | string;
    msg: string;
}

declare type RoomListType = {
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
declare interface IHomeRoomInfoList {
    title: string;
    subtitle?: string;
    list: Array<RoomListType>
}

interface ICityAccommodations {
    [city: string]: RoomListType[]
}

declare interface IHomeDiscountInfoList {
    title: string;
    subtitle?: string;
    dest_list: any;
    dest_address?: Array<{name: string}>
}