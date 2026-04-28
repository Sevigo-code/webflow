import { X, Trash2, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import './Css/CartDrawer.css'

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, clearCart, totalItems, totalPrice } = useCart()

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} />}

      <div className={`cart-drawer glass ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">
            <ShoppingBag size={20} /> Tu Carrito
            {totalItems > 0 && <span className="cart-drawer-count">{totalItems}</span>}
          </h2>
          <button className="icon-btn" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <ShoppingBag size={48} strokeWidth={1} />
            <p>Tu carrito está vacío</p>
            <span>Agrega productos para verlos aquí</span>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map(item => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-qty">× {item.quantity}</span>
                  </div>
                  <div className="cart-item-right">
                    <span className="cart-item-price">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button className="icon-btn cart-remove-btn" onClick={() => removeItem(item.id)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="cart-total-price">${totalPrice.toLocaleString()}</span>
              </div>
              <button className="btn btn-primary cart-checkout-btn">
                Ir al Pago
              </button>
              <button className="cart-clear-btn" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
