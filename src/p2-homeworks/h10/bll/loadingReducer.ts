export type ChangeLoadingAC = {
    type: 'CHANGE-LOADING'
    value: boolean
}

export type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ChangeLoadingAC): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
                ...state,
                isLoading: action.value
            }
        }
        default:
            return state
    }
}

export const loadingAC = (value: boolean): ChangeLoadingAC => {
    return {type: 'CHANGE-LOADING', value}
} // fix any