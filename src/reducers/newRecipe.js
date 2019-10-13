const initialState = {
    title: "",
    directions: "",
    ingredients: "",
    showModal: false

}

export default function reducer (state = initialState, action) {
//action has 2 properties, type & payload
let tempState = state
 
switch (action.type) { //we're switching on the action.type
 
case "NEW_TITLE" :
return {...tempState, title: action.payload}
case "NEW_DIRECTION" :
return {...tempState, directions: action.payload}
case "NEW_INGREDIENT" :
return {...tempState, ingredients: action.payload}
case "SHOW_NEW_MODAL" :
return {...tempState, showModal: action.payload}
}
return tempState;
}