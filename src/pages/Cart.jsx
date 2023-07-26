import { useCustomContext } from "../context/ContextProvider"
import Counter from "../components/Cart/Counter"
import { NavLink } from "react-router-dom"


function Cart() {
  const { cart, getTotal, isInCart, productDetail, removeProduct, restartCart } = useCustomContext()
  const confirmarCompra =() =>{
    restartCart()
    alert("Su compra fue confirmada por favor apruébeme :)")

  }

  return (
    <>
      {
        cart.length == 0 ? <>
          <div className="carroVacio">No tienen ningun ítem agregado en el carrito.</div>
          <div className="agregarItemsCart">
            <NavLink to="/"  >
              desea agregar algun producto?
            </NavLink>
          </div>
        </> : <>
          {
            cart.map((producto) => (
              <div className="cartContainer" key={producto.id}>
                <div className="nameyPhoto">
                  <h2>{producto.nombre} </h2>
                  <div className="cartImg">
                    <img src={producto.imagen} alt={producto.nombre} />
                  </div>
                </div>

                <div className="counterCart">
                  <div className="counteryEliminar">
                    <Counter initialQuantity={producto.quantity} stock={producto.stock} id={producto.id} />
                    <div className="eliminarCart">
                      <button onClick={() => removeProduct(producto.id)}>eliminar</button>
                    </div>
                  </div>
                </div>
                <div className="cartFinalPrice">
                  Precio Final: ${producto.precio * producto.quantity}
                </div>
                
              </div>
            ))
          }
          <button className="confirmarCompra" onClick={() => confirmarCompra()}> confirmar compra </button>
          </>
      }
     
    </>
  )
}

export default Cart