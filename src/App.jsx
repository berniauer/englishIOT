
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutProjectPage from '@/pages/AboutProjectPage';
import IoTBasicsPage from '@/pages/IoTBasicsPage';
import ZigbeePage from '@/pages/ZigbeePage';
import ImplementationPage from '@/pages/ImplementationPage';
import DiscussionPage from '@/pages/DiscussionPage';
import { Toaster } from '@/components/ui/toaster';
import AbstractPage from '@/pages/AbstractPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-project" element={<AboutProjectPage />} />
          <Route path="/iot-basics" element={<IoTBasicsPage />} />
          <Route path="/zigbee-detail" element={<ZigbeePage />} />
          <Route path="/system-implementation" element={<ImplementationPage />} />
          <Route path="/discussion-results" element={<DiscussionPage />} />
          <Route path="/abstract" element={<AbstractPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;
  