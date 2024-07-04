import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <Link to="/admin" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Admin</Link>
      </div>
      <div className="p-4">
        <h2 className="text-2xl">Welcome to the Dashboard!</h2>
        {/* Adicione aqui os componentes do dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
