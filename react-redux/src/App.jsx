import React from 'react'
import DestinationList from './component/DestinationList';
import Header from './component/Header';
import PlaceFilter from './component/PlaceFilter';
const App = () => {
  return (
    <>
      <Header />
      <PlaceFilter />
      <DestinationList/>
    </>
  )
}

export default App