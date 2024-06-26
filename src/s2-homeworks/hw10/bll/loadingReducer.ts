export type StateType = {
    isLoading: boolean
}

const initState: StateType = {
    isLoading: false,
}

export const loadingReducer = (state = initState, action: LoadingActionType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading};
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
