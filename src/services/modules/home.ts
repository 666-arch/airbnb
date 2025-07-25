import apiRequest from "..";
export const getHomeGoodPriceData = () => {
    return apiRequest.get({
        url: "/home/goodprice"
    })
}