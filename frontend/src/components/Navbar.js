// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Sistema de Comunicação Escolar</h1>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/dashboard" className="text-white px-4">Dashboard</Link>
          <Link to="/profile" className="text-white px-4">Perfil</Link>
          <Link to="/feed" className="text-white px-4">Feed</Link>
          <Link to="/groups" className="text-white px-4">Grupos</Link>
          <Link to="/messages" className="text-white px-4">Mensagens</Link>
          <Link to="/calendar" className="text-white px-4">Calendário</Link>
          <Link to="/assignments" className="text-white px-4">Tarefas</Link>
          <Link to="/resources" className="text-white px-4">Recursos</Link>
          <Link to="/notifications" className="text-white px-4">Notificações</Link>
          <Link to="/reports" className="text-white px-4">Relatórios</Link>
          <Link to="/admin" className="text-white px-4">Admin</Link>
          <Link to="/login" className="text-white px-4">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
