import Header from "../components/Header"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./Cart.css"

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="empty-cart">
          <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" />
          <h2>Your Cart Is Empty</h2>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <h2>My Cart</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} />
          <div>
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <div className="total-box">
        <h3>Total Amount: ₹ {total}</h3>
      </div>
    </>
  )
}
// import Header from "../components/Header"
// import { useContext } from "react"
// import { CartContext } from "../context/CartContext"
// import "./Cart.css"

// export default function Cart() {
//   const { cart, increaseQty, decreaseQty } = useContext(CartContext)

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   )

//   if (cart.length === 0) {
//     return (
//       <>
//         <Header />
//         <div className="empty-cart">
//           <h2>Your Cart Is Empty</h2>
//         </div>
//       </>
//     )
//   }

//   return (
//     <>
//       <Header />
//       <h2>My Cart</h2>

//       {cart.map(item => (
//         <div className="cart-item" key={item.id}>
//           <img src={item.image} />
//           <div>
//             <h4>{item.name}</h4>
//             <p>₹ {item.price}</p>
//           </div>

//           <div className="qty-box">
//             <button onClick={() => decreaseQty(item.id)}>-</button>
//             <span>{item.qty}</span>
//             <button onClick={() => increaseQty(item.id)}>+</button>
//           </div>

//           <p className="item-total">
//             ₹ {item.price * item.qty}
//           </p>
//         </div>
//       ))}

//       <div className="total-box">
//         <h3>Total Amount: ₹ {total}</h3>
//       </div>
//     </>
//   )
// }
