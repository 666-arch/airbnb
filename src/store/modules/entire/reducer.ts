import * as actionTypes from './constants'
const initalState = {
    currentPage: 0,
    totalCount: 0,
    roomList: []
}
const reducer =
    (state = initalState, action: { type: string }) => {
        switch (action.type) {
            case actionTypes.CHANGE_CURRENT_PAGE:
                return { ...state, currentPage: action.currentPage }
            case actionTypes.CHANGE_ROOM_LIST:
                return { ...state, roomList: action.roomList }

            case actionTypes.CHANGE_TOTAL_COUNT:
                return { ...state, totalCount: action.totalCount }
            default:
                return state;
        }
    }
export default reducer;