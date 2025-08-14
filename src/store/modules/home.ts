//@reduxjs/rtk
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeDiscountData, getHomeGoodHighScoreData, getHomeGoodLongForData, getHomeGoodPriceData, getHomeHotRecommendData, getHomePlusData } from "@/services/modules/home";
interface HomeState {
    goodPriceInfo: IHomeRoomInfoList;
    goodHighScoreInfo: IHomeRoomInfoList;
    goodDiscountInfo: any;
    goodHotRecommendInfo: any;
    goodLongForInfo: IHomeRoomInfoList;
    goodPlusInfo: IHomeRoomInfoList;
}
const initialState: HomeState = {
    goodPriceInfo: {
        title: "",
        list: []
    },
    goodHighScoreInfo: {
        title: "",
        list: []
    },
    goodDiscountInfo: {
        title: "",
        dest_list: {}
    },
    goodHotRecommendInfo: {
        title: "",
        dest_list: {}
    },
    goodLongForInfo: {
        title: "",
        list: []
    },
    goodPlusInfo: {
        title: "",
        list: []
    }
};
export const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        res.status === 200 && dispatch(changeGoodPriceInfoAction(res.data))
    })
    getHomeGoodHighScoreData().then(res => {
        res.status === 200 && dispatch(changeGoodHighScoreAction(res.data))
    })
    getHomeDiscountData().then(res => {
        res.status === 200 && dispatch(changeGoodDiscountAction(res.data))
    })
    getHomeHotRecommendData().then(res => {
        res.status === 200 && dispatch(changeGoodHotRecommendAction(res.data))
    })
    getHomeGoodLongForData().then(res => {
        res.status === 200 && dispatch(changeGoodLongForAction(res.data))
    })
    getHomePlusData().then(res => {
        res.status === 200 && dispatch(changeGoodPlusAction(res.data))
    })
})

const homeSlice =
    createSlice({
        name: "home",
        initialState,
        reducers: {
            changeGoodPriceInfoAction(state, { payload }) {
                state.goodPriceInfo = payload
            },
            changeGoodHighScoreAction(state, { payload }) {
                state.goodHighScoreInfo = payload
            },
            changeGoodDiscountAction(state, { payload }) {
                state.goodDiscountInfo = payload
            },
            changeGoodHotRecommendAction(state, { payload }) {
                state.goodHotRecommendInfo = payload
            },
            changeGoodLongForAction(state, { payload }) {
                state.goodLongForInfo = payload
            },
            changeGoodPlusAction(state, { payload }) {
                state.goodPlusInfo = payload
            }
        },
        // extraReducers: (builder) => {
        //     builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        //         state.goodPriceInfo = payload
        //     })
        // }
    })

export const { changeGoodPriceInfoAction, changeGoodHighScoreAction, changeGoodDiscountAction, changeGoodHotRecommendAction, changeGoodLongForAction, changeGoodPlusAction } = homeSlice.actions

export default homeSlice.reducer