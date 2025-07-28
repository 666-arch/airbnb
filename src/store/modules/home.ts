//@reduxjs/rtk
import { getHomeGoodPriceData } from "@/services/modules/home";
import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
interface HomeState {
    goodpriceInfo: any[]; // 替换为实际数据类型
}
const initialState: HomeState = {
    goodpriceInfo: [],
};
export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
    const response = await getHomeGoodPriceData()
    return response.data;
})
const homeSlice =
    createSlice({
        name: "home",
        initialState,
        reducers: {
            changeGoodPriceInfoAction(state, { payload }) {
                state.goodpriceInfo = payload
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
                state.goodpriceInfo = payload
            })
        }
    })

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer