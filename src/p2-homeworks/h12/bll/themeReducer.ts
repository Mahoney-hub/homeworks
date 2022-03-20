export type ChangeThemeAC = {
    type: 'CHANGE-THEME'
    value: string
}

export type initStateType = {
    theme: string
}

const initState: initStateType = {
    theme: 'teal'
};

export const themeReducer = (state = initState, action: ChangeThemeAC): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                theme: action.value
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (value: string): ChangeThemeAC => {
    return {type: 'CHANGE-THEME', value}
}; // fix any