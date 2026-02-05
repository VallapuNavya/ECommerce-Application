import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { products } from "../data/products"

export default function ProductDetails() {
  const { id } = useParams()
  const { addToCart } = useContext(CartContext)

  const product = products.find(p => p.id === Number(id))

  return (
    <>
      <Header />
      <div className="card">
        <img src={product.image} />
        <h2>{product.name}</h2>
        <p>₹ {product.price}</p>
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </>
  )
}
