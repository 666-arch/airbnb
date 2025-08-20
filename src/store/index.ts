import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "@/store/modules/home"
import entireReducer from "@/store/modules/entire"
import detailReducer from "@/store/modules/detail"
import mainReducer from "@/store/modules/main"
const store =
    configureStore({
        reducer: {
            home: homeReducer,
            entire: entireReducer,
            detail: detailReducer,
            main: mainReducer
        }
    })

export default store;