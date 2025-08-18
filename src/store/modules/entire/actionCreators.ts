import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constants'

export const changeCurrentPageAction = (currentPage: number) => ({
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
})

export const changeRoomListAction = (roomList) => ({
    type: actionTypes.CHANGE_ROOM_LIST,
    roomList
})

export const changeTotalCountAction = (totalCount) => ({
    type: actionTypes.CHANGE_TOTAL_COUNT,
    totalCount
})

export const changeIsLoading = (isLoading) => ({
    type: actionTypes.CHANGE_IS_LOADING,
    isLoading
})

export const fetchRoomListAction = (page = 0) => {
    return async (dispatch: (arg0: { type: string; currentPage?: number; roomList?: any; totalCount?: any }) => void) => {
        dispatch(changeCurrentPageAction(page));
        dispatch(changeIsLoading(true))
        const { data, status } = await getEntireRoomList(page * 20);
        if (status === 200) {
            const roomList = data.list
            const totalCount = data.totalCount
            dispatch(changeRoomListAction(roomList))
            dispatch(changeTotalCountAction(totalCount))
            
            dispatch(changeIsLoading(false))
        }
    }
}
