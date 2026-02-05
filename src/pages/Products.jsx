import Header from "../components/Header"
import { Link } from "react-router-dom"
import { products } from "../data/products"
import { useState } from "react"
import "./Products.css"

export default function Products() {
  const [query, setQuery] = useState("")

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <Header />
      <h2>Exclusive Prime Deals</h2>

      <input
        className="search"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="product-grid">
        {filtered.map(p => (
          <div className="card" key={p.id}>
            <img src={p.image} />
            <h4>{p.name}</h4>
            <p>₹ {p.price}</p>
            <Link to={`/products/${p.id}`} className="view-btn">
              View
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
