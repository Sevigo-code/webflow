import React, { useState } from 'react'
import { ShoppingCart, Star, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'

function Card({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  const badgeClass = {
    'Nuevo': 'new',
    'Top Seller': 'top-seller',
    'Oferta': 'sale',
  }[product.badge] ?? ''

  return (
    <div className="product-card glass-panel">

      {product.badge && (
        <div className="product-badges">
          <span className={`badge-pill ${badgeClass}`}>{product.badge}</span>
        </div>
      )}

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
          <span className="price">${product.price.toLocaleString()}</span>
          <button
            className={`icon-btn add-to-cart ${added ? 'added' : ''}`}
            onClick={handleAdd}
            title="Agregar al carrito"
          >
            {added ? <Check size={18} /> : <ShoppingCart size={18} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
