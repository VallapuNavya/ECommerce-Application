import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./Header.css"

export default function Header() {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className="header">
      <h2 className="logo">NxtTrendz</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>

        <Link to="/cart" className="cart-link">
          Cart {cart.length > 0 && <span className="count">{cart.length}</span>}
        </Link>

        <button onClick={() => navigate("/")} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  )
}
