import { TypedUseSelectorHook, useSelector } from "react-redux";

type StateThemeType = {
    themeId: number
}

const initState: StateThemeType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): StateThemeType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
type ActionType = ReturnType<typeof changeThemeId>
