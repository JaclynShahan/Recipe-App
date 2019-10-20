import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import {connect} from 'react-redux'

function App (props) {
  // console.log(props)
  return (
    // provider applies the store to all the components between the provider brackets
    
      <div className='App'>{store.getState().login.auth ? 
      <Home /> : 
      <Login />}
      </div>
  )
}


const mapStateToProps = state => state;


export default connect(mapStateToProps, {})(App)

