//@reduxjs/rtk
import { createSlice } from "@reduxjs/toolkit";
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
        }
    })

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer