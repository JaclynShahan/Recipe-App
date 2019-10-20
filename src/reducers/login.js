const initialState = {
    password: "",
    auth: false
}

export default function reducer(state = initialState, action) {
    let tempState = state

    switch(action.type) {
        case "USER_PASSWORD" :
        return {...tempState, password: action.payload}
        case "USER_AUTH" :
        return {...tempState, auth: action.payload}

    }
    return tempState;
}