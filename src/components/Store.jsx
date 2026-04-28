import React, { useState } from 'react'
import { Cpu, Headphones, Monitor, Mouse, HardDrive, Keyboard } from 'lucide-react'
import Card from './Card'
import './Css/Store.css'

const ICON_MAP = {
  Cpu: <Cpu size={48} className="product-icon" />,
  Keyboard: <Keyboard size={48} className="product-icon" />,
  Headphones: <Headphones size={48} className="product-icon" />,
  Monitor: <Monitor size={48} className="product-icon" />,
  Mouse: <Mouse size={48} className="product-icon" />,
  HardDrive: <HardDrive size={48} className="product-icon" />,
}

// Datos listos para conectar a AWS en el futuro
const products = [
  { id: 1, name: 'RTX 4090 Suprim',        category: 'Gráficas',        price: 1799, rating: 4.9, badge: 'Top Seller', icon: 'Cpu'      },
  { id: 2, name: 'Corsair K95 Platinum',   category: 'Periféricos',     price: 229,  rating: 4.8, badge: 'Nuevo',      icon: 'Keyboard' },
  { id: 3, name: 'Audífonos HyperX Cloud', category: 'Audio',           price: 149,  rating: 4.7, badge: null,         icon: 'Headphones'},
  { id: 4, name: 'Monitor ASUS 240Hz',     category: 'Monitores',       price: 599,  rating: 4.6, badge: null,         icon: 'Monitor'  },
  { id: 5, name: 'Mouse Logitech G Pro X', category: 'Periféricos',     price: 89,   rating: 4.8, badge: 'Oferta',     icon: 'Mouse'    },
  { id: 6, name: 'SSD Samsung 990 Pro 2TB',category: 'Almacenamiento',  price: 179,  rating: 4.9, badge: 'Nuevo',      icon: 'HardDrive'},
]

const CATEGORIES = ['Todos', 'Gráficas', 'Periféricos', 'Audio', 'Monitores', 'Almacenamiento']

function Store() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = activeFilter === 'Todos'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <section id="store-section" className="store-section">
      <div className="section-header text-center">
        <h2 className="section-title">
          Productos <span className="gradient-text">en Stock</span>
        </h2>
        <p className="section-subtitle">
          Tenemos los mejores componentes y periféricos gaming listos para envío inmediato.
        </p>
      </div>

      <div className="filter-bar">
        {CATEGORIES.map(f => (
          <button
            key={f}
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filtered.map(product => (
          <Card
            key={product.id}
            product={{ ...product, imageIcon: ICON_MAP[product.icon] }}
          />
        ))}
      </div>
    </section>
  )
}

export default Store
