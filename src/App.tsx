import React from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-gray-50">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;