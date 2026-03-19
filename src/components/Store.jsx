import React from 'react';
import { ShoppingCart, Star, Cpu, Smartphone, Headphones } from 'lucide-react';
import './Store.css';

const products = [
    {
        id: 1,
        name: 'AURA X1 Pro Laptop',
        category: 'Computadoras',
        price: 1899,
        rating: 4.9,
        imageIcon: <Cpu size={48} className="product-icon" />,
        badges: ['Nuevo', 'Más Vendido']
    },
    {
        id: 2,
        name: 'AURA Phantom Phone',
        category: 'Móviles',
        price: 999,
        rating: 4.8,
        imageIcon: <Smartphone size={48} className="product-icon" />,
        badges: []
    },
    {
        id: 3,
        name: 'AURA Sonic Pods',
        category: 'Audio',
        price: 249,
        rating: 4.7,
        imageIcon: <Headphones size={48} className="product-icon" />,
        badges: ['Oferta']
    },
    {
        id: 4,
        name: 'AURA VR Edge',
        category: 'Gaming',
        price: 499,
        rating: 4.6,
        imageIcon: <Cpu size={48} className="product-icon" />,
        badges: []
    }
];

const ProductCard = ({ product }) => (
    <div className="product-card glass-panel animate-fade-in">
        <div className="product-badges">
            {product.badges.map((badge, idx) => (
                <span key={idx} className={`badge-pill ${badge.toLowerCase().replace(' ', '-')}`}>
                    {badge}
                </span>
            ))}
        </div>

        <div className="product-image-container">
            <div className="glow-backdrop"></div>
            {product.imageIcon}
        </div>

        <div className="product-info">
            <div className="product-meta">
                <span className="category">{product.category}</span>
                <div className="rating">
                    <Star size={14} className="star-icon" fill="currentColor" />
                    <span>{product.rating}</span>
                </div>
            </div>

            <h3 className="product-name">{product.name}</h3>

            <div className="product-bottom">
                <span className="price">${product.price}</span>
                <button className="icon-btn add-to-cart">
                    <ShoppingCart size={18} />
                </button>
            </div>
        </div>
    </div>
);

const Store = () => {
    return (
        <section className="store-section">
            <div className="section-header text-center">
                <h2 className="section-title">
                    Productos <span className="gradient-text">Destacados</span>
                </h2>
                <p className="section-subtitle">
                    Explora nuestra última colección de dispositivos inteligentes prémium y accesorios.
                </p>
            </div>

            <div className="filter-bar">
                {['Todos', 'Computadoras', 'Móviles', 'Audio', 'Gaming'].map((filter, index) => (
                    <button key={filter} className={`filter-btn ${index === 0 ? 'active' : ''}`}>
                        {filter}
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Store;
