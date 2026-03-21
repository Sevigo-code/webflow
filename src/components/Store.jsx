import React, { useState } from 'react';
import { Cpu, Smartphone, Headphones } from 'lucide-react';
import Card from './Card';
import './Css/Store.css';

const products = [
    {
        id: 1,
        name: 'RTX 4090 Suprim',
        category: 'Gráficas',
        price: 1799,
        rating: 4.9,
        imageIcon: <Cpu size={48} className="product-icon" />
    },
    {
        id: 2,
        name: 'Corsair K95 Platinum',
        category: 'Periféricos',
        price: 229,
        rating: 4.8,
        imageIcon: <Smartphone size={48} className="product-icon" />
    },
    {
        id: 3,
        name: 'Audífonos HyperX Cloud',
        category: 'Audio',
        price: 149,
        rating: 4.7,
        imageIcon: <Headphones size={48} className="product-icon" />
    },
    {
        id: 4,
        name: 'Monitor ASUS 240Hz',
        category: 'Monitores',
        price: 599,
        rating: 4.6,
        imageIcon: <Cpu size={48} className="product-icon" />
    }
];

const CATEGORIES = ['Todos', 'Gráficas', 'Periféricos', 'Audio', 'Monitores'];

function Store() {
    const [activeFilter, setActiveFilter] = useState('Todos');

    // Obtener productos filtrados
    const filteredProducts = activeFilter === 'Todos' 
        ? products 
        : products.filter(product => product.category === activeFilter);

    // Cambiar el filtro activo
    const handleFilterChange = (newFilter) => {
        setActiveFilter(newFilter);
    };

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
                {CATEGORIES.map((filter) => (
                    <button 
                        key={filter} 
                        className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => handleFilterChange(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default Store;
