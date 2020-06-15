const initState = {
    user: { name: '1' },
    name: 'home',
    data: []
}

export default function home(state = initState, action) {
    switch (action.type) {
        case 'HOME_GET_DATA':
            return {
                ...state,
                data: action.payload.data.users
            }
        default:
            return state
    }
}