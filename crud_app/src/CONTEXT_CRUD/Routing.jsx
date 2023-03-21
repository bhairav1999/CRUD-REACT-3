import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormStdData from './FormStdData';
import TabledataStd from './TabledataStd';

const Routing = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route  exact path="/" element={<TabledataStd/>}    />
        <Route  exact path="/formadd" element={<FormStdData/>}    />
        <Route  exact path="/edit/:id" element={<TabledataStd/>}    />
      </Routes>
    </Router>
    
    </>
  );
}

export default Routing;
