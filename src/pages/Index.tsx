// Audio/Video File Conversion and Editing Platform
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Dashboard />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;