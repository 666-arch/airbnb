//@reduxjs/rtk
import { getHomeGoodPriceData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
interface HomeState {
    goodPriceInfo: IGoodPriceInfoList; // 替换为实际数据类型
}
const initialState: HomeState = {
    goodPriceInfo: {
        title: "",
        list: []
    },
};
export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
    const response = await getHomeGoodPriceData()
    const dataSource = response.data as IGoodPriceInfoList
    return dataSource;
})
const homeSlice =
    createSlice({
        name: "home",
        initialState,
        reducers: {
            changeGoodPriceInfoAction(state, { payload }) {
                state.goodPriceInfo = payload
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
                state.goodPriceInfo = payload
            })
        }
    })

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer