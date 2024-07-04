// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">VIBER - Sistema de Comunicação Escolar</h1>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Atividades Recentes</h2>
            <p>Conteúdo das atividades recentes...</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Usuários</h2>
            <p>Lista de usuários...</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">Mensagens</h2>
            <p>Mensagens recentes...</p>
          </div>
          {/* Adicione mais seções conforme necessário */}
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Viber. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
