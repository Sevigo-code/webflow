import React, { useState } from 'react'
import { ShoppingCart, Menu, X, Cpu, Newspaper } from 'lucide-react'
import { useCart } from '../context/CartContext'
import CartDrawer from './CartDrawer'
import './Css/Navbar.css'

function Navbar({ activeTab, setActiveTab }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { totalItems } = useCart()

  const navItems = [
    { id: 'store', label: 'Productos', icon: <Cpu size={18} /> },
    { id: 'news', label: 'Novedades', icon: <Newspaper size={18} /> },
  ]

  function handleLogoClick() {
    setActiveTab('store')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  function handleTabChange(tab) {
    setActiveTab(tab)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="glass navbar">
        <div className="nav-container">
          <div className="logo" onClick={handleLogoClick}>
            <span className="logo-icon">⚡</span>
            <span className="logo-text">WEB <span className="gradient-text">FLOW</span></span>
          </div>

          <div className="nav-links desktop-only">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleTabChange(item.id)}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="icon-btn cart-btn" onClick={() => setCartOpen(true)}>
              <ShoppingCart size={20} />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </button>

            <button className="icon-btn mobile-only" onClick={() => setMenuOpen(prev => !prev)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`nav-item mobile-nav-item ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => handleTabChange(item.id)}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default Navbar
