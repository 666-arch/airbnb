//@reduxjs/rtk
import { getHomeGoodHighScoreData, getHomeGoodPriceData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface HomeState {
    goodPriceInfo: IGoodPriceInfoList;
    goodHighScoreInfo: IGoodHighScoreList
}
const initialState: HomeState = {
    goodPriceInfo: {
        title: "",
        list: []
    },
    goodHighScoreInfo: {
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
        res.status === 200 && dispatch(changeGoodPriceInfoAction(res.data))
    })
    getHomeGoodHighScoreData().then(res => {
        res.status === 200 && dispatch(changeGoodHighScoreAction(res.data))
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