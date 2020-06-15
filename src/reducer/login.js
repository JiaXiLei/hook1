const initState = {
    name: 'login',
    data: []
}

export default function login(state = initState, action) {
    switch (action.type) {
        //  case 'SAVE_TOKEN':
        //    return {
        //      ...state,
        //      token: action.payload  //action.payload是传递回来的值
        //    }
        default:
            return state
    }
}