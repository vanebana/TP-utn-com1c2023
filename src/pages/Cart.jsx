import { useCustomContext } from "../context/ContextProvider"
import Counter from "../components/Cart/Counter"


function Cart() {
  const { cart, getTotal, isInCart, productDetail, removeProduct } = useCustomContext()
  console.log(cart)

  return (
    <>
      {
        cart.map((producto) => (
          <div key={producto.id}>
            {producto.nombre}
            <div>
              <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div><Counter initialQuantity={producto.quantity} stock={producto.stock} id={producto.id} />
            </div>
            <div>
              Precio:{producto.precio}
            </div>
            <button onClick={()=>removeProduct(producto.id)}>eliminar</button>
          </div>
        )
        )
      }
    </>
  )
}

export default Cart