import {createStore, applyMiddleware, combineReducers} from 'redux';
import main from './reducers/main';
import newRecipe from './reducers/newRecipe'
import promiseMiddleware from 'redux-promise-middleware';


export default createStore (
    combineReducers({ //this combines all of our reducers when we create the store
        newRecipe,
        main

    }),
    applyMiddleware(promiseMiddleware) //applyMiddleware applies promiseMiddleware 
)