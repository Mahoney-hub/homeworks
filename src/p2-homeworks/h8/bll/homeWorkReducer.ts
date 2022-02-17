import {UserType} from '../HW8';

type SortValueType = 'up' | 'down'

type SortActionType = {
    type: 'sort'
    payload: SortValueType
}

type CheckActionType = {
    type: 'check'
    payload: number
}

type ActionsType = SortActionType | CheckActionType

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = state.map(a => ({...a}))
            switch (action.payload) {
                case 'up':
                    return newState.sort((a, b) => b.name >= a.name ? -1 : 1)
                case 'down':
                    return newState.sort((a, b) => a.name >= b.name ? -1 : 1)
                default:
                    return newState
            }
        }
        case 'check': {
            return state.filter(item => item.age >= 18)
        }
        default:
            return state
    }
}