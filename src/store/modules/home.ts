//@reduxjs/rtk
import { getHomeGoodHighScoreData, getHomeGoodPriceData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface HomeState {
    goodPriceInfo: IGoodPriceInfoList;
    goodScoreInfo: IGoodHighScoreList
}
const initialState: HomeState = {
    goodPriceInfo: {
        title: "",
        list: []
    },
    goodScoreInfo: {
        title: "",
        list: []
    }
};
// export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
//     const response = await getHomeGoodPriceData()
//     const dataSource = response.data as IGoodPriceInfoList
//     return dataSource;
// })

export const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
        dispatch(changeGoodPriceInfoAction(res))
    })
    getHomeGoodHighScoreData().then(res => {
        dispatch(changeGoodHighScoreAction(res))
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
                state
            }
        },
        // extraReducers: (builder) => {
        //     builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        //         state.goodPriceInfo = payload
        //     })
        // }
    })

export const { changeGoodPriceInfoAction, changeGoodHighScoreAction } = homeSlice.actions

export default homeSlice.reducer