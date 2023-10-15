import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Discover from './components/discover';
import Form from './components/form';
import Blog from './components/blog';
import Footer from './components/footer';
import Featured from './components/featured';


import Home from './components/hero';
import CharteredAccountantForm from './components/CharteredAccountantForm';
import CharteredAccountantList from './components/CharteredAccountantList';
import CharteredAccountantDetails from './components/CharteredAccountantDetails';
const charteredAccountants = require('./charteredAccountants.json');

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home charteredAccountants={charteredAccountants}  />} />
          <Route path="/CharteredAccountantForm" element={<CharteredAccountantForm />} />
          <Route path="/CharteredAccountantList" element={<CharteredAccountantList />} /> 
        <Route path="/chartered-accountant-list" element={<CharteredAccountantList charteredAccountants={charteredAccountants} />} />
        <Route path="/chartered-accountant-details/:accountantId" element={<CharteredAccountantDetails charteredAccountants={charteredAccountants} />} />
        <Route path="/chartered-accountants" render={() => <CharteredAccountantList charteredAccountants={charteredAccountants} />} />
      </Routes>
        
      </Router>
      <div className='flex flex-col w-full'>
        
        <Featured />
        <Discover />
        <Form />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
