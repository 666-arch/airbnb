import apiRequest from "..";
export const getHomeGoodPriceData = () => {
    return apiRequest.get({
        url: "/home/goodprice"
    })
}

export const getHomeGoodHighScoreData = () => {
    return apiRequest.get({
        url: "/home/highscore"
    })
}

export const getHomeDiscountData = () => {
    return apiRequest.get({
        url: "/home/discount"
    })
}