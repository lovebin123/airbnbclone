import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';


function App() {
  return (
  <>
  <Router basename='/airbnbclone'>
  <Header/>

   <Routes>
   <Route exact  path='' element={<Home/>}></Route>
   
   </Routes>
   </Router>
  </>
  )
}

export default App