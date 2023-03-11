import React from 'react'
import DestinationList from './component/DestinationList';
import Header from './component/Header';
import PlaceFilter from './component/PlaceFilter';
import {Provider} from 'react-redux';
import store from './redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <PlaceFilter />
      <DestinationList/>
    </Provider>
  )
}

export default App