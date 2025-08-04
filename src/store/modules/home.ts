//@reduxjs/rtk
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeDiscountData, getHomeGoodHighScoreData, getHomeGoodPriceData } from "@/services/modules/home";
interface HomeState {
    goodPriceInfo: IHomeRoomInfoList;
    goodHighScoreInfo: IHomeRoomInfoList;
    goodDiscountInfo: any
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
            }
        },
        // extraReducers: (builder) => {
        //     builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        //         state.goodPriceInfo = payload
        //     })
        // }
    })

export const { changeGoodPriceInfoAction, changeGoodHighScoreAction, changeGoodDiscountAction } = homeSlice.actions

export default homeSlice.reducer