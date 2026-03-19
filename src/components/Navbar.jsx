import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Cpu, Newspaper } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'store', label: 'Tienda', icon: <Cpu size={18} /> },
        { id: 'news', label: 'Noticias', icon: <Newspaper size={18} /> },
    ];

    return (
        <nav className="glass navbar">
            <div className="nav-container">
                <div className="logo" onClick={() => setActiveTab('store')}>
                    <span className="logo-icon">▲</span>
                    <span className="logo-text">WEB <span className="gradient-text">FLOW</span></span>
                </div>

                <div className="nav-links desktop-only">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(item.id)}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </div>

                <div className="nav-actions">
                    <button className="icon-btn"><Search size={20} /></button>
                    <button className="icon-btn cart-btn">
                        <ShoppingCart size={20} />
                        <span className="cart-badge">2</span>
                    </button>

                    <button className="icon-btn mobile-only" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
