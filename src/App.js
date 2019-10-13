import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import Home from './components/Home/Home';

function App() {
  //console.log(props)
  return ( // provider applies the store to all the components between the provider brackets
    <Provider store={store}> 
    <div className="App">
   <Home />
   </div>
    </Provider>
    
  );
}

export default App;
