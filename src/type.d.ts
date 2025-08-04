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

type Accommodation = {
    id: string;
    picture_url: string;
    name: string;
    price: number;
    price_format: string;
    star_rating: number;
    star_rating_color: string;
    reviews_count: number;
    lat: number;
    lng: number;
    image_url: string;
}
interface ICityAccommodations {
    [city: string]: Accommodation[]
}
declare interface IHomeDiscountInfoList {
    title: string;
    subtitle?: string;
    dest_list: ICityAccommodations
}