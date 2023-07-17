import React from 'react';

import {

  Route,
  Routes
} from 'react-router-dom';

import Index from './screens';
import Dashboard from './screens/dashboard';

 const App = () => {
  return (
    <Routes>
    <Route path='/' element={<Index/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>



  )
}
export default App;