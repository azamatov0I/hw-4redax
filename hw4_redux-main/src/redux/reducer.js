const initialState = {
    res: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS':
            return {...state, res: action.payload}
        case 'MINUS':
            return {...state, res: action.payload}
        case 'MULTIPLY':
            return {...state, res: action.payload}
        case 'DIVIDED':
            return {...state, res: action.payload}
        default: return state
    }
}