import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

function Card({ product }) {
    return (
        <div className="product-card glass-panel">

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
}

export default Card;
