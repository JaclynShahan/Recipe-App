

const initialState = {
    title: "",
    directions: "",
    ingredients: "",
    id: "", 
    
}

export default function reducer (state = initialState, action) {

    let tempState = state

    switch(action.type) {
        case "EDIT_TITLE" :
        return {...tempState, title: action.payload}
        case "EDIT_DIRECTIONS" :
        return {...tempState, directions: action.payload}
        case "EDIT_INGREDIENTS" :
        return {...tempState, ingredients: action.payload}
        case "EDIT_ID" :
        return {...tempState, id: action.payload}
   

    }
    return tempState
}