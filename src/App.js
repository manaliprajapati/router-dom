// import logo from './logo.svg';
import './App.css';
import Page from './Component/Page';

// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
// import Home from './Component/Home';
// import About from './Component/About'
// import Navbar from './Component/Navbar';
// import Page404 from './Component/Page404'
// import User from './Component/User';
// import Contact from './Component/Contact';
// import Company from './Component/Company';
// import Channel from './Component/Channel';
// import Other from './Component/Other';
// import Login from './Component/Login';
// import Protected from './Component/Protected';
// import Company from './Component/Company';
// import Filter from './Component/Filter';
// import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      <Page />
   {/* <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path="/"  element={<Protected Component={Home} />} />
  <Route path="/login"  element={<Login />} />
  <Route path="/about"  element={<About />} />
  <Route path="/filter" element={<Filter />} />
  <Route path="/user/:name"  element={<User />} />
  <Route path="/*" element={<Page404 />} /> 
  <Route path="/*" element={<Navigate to="/"/>} />
  <Route path="/contact/"  element={<Contact />} />
   <Route path="comapny" element={<Company />} />
   <Route path="channel" element={<Channel />} />
   <Route path="other" element={<Other />} />
  </Routes>
   </BrowserRouter>
    */}
   {/* <Route path='/home'><Home /></Route> */}
    </div>
  );
}

export default App;
