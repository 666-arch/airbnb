//@reduxjs/rtk
import { getHomeGoodPriceData } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
    const response = await getHomeGoodPriceData()
    return response;
})
const homeSlice =
    createSlice({
        name: "home",
        initialState: {
            goodpriceInfo: []
        },
        reducers: {
            changeGoodPriceInfoAction(state, { payload }) {
                state.goodpriceInfo = payload
            }
        },
        extraReducers: {
            [fetchHomeDataAction.fulfilled](state, { payload }) {
                
            }
        }
    })

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer