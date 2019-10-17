const initialState = {
        title: "",
        directions: "",
        ingredients: "",
        recipes: [],
        editModal: false

}

export default function reducer (state = initialState, action) {
    //action has 2 properties, type & payload
    let tempState = state
     
    switch (action.type) { //we're switching on the action.type
     
    case "TITLE" :
    return {...tempState, title: action.payload}
    case "DESCRIPTION" :
    return {...tempState, description: action.payload}
    case "INGREDIENTS" :
    return {...tempState, ingredients: action.payload}
    case "RECIPE_LIST" :
    return {...tempState, recipes: action.payload}
    case "EDIT_MODAL" :
    return {...tempState, editModal: action.payload }
}
    
    return tempState;
}

