import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Store from './components/Store';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('store');

  return (
    <div className="app-container">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        {/* Sección de tienda */}
        {activeTab === 'store' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <Store />
          </>
        )}
        
        {/* Sección de noticias */}
        {activeTab === 'news' && <News />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
