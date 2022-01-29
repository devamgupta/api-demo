import React from 'react';
import './App.css';
import MenuItemList from './components/MenuItemList';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>API Call Demo</h1>
        <MenuItemList />
      </div>
    </Provider>
  )
}

export default App;
