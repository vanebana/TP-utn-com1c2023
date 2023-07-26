import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useCustomContext } from '../context/ContextProvider';
import Counter from '../components/Cart/Counter';



function Detail() {
  const { products, getProductById, addProductCart, isInCart, getProductCartById } = useCustomContext()
  const navigate = useNavigate();
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

  useEffect(() => {
    if (!productDetail) {
      navigate('/not-found');
    }
  }, [productDetail]);

  if (!productDetail) {
    return null;
  }

  return (
    <>
      <div className='detailContainer'>
        <div className='left'>
        <div className='detailImg'>
          <img src={productDetail.imagen} alt={productDetail.nombre} />
        </div>
        </div>
        <div className='right'>
        <div className='detailNombre'>
          {productDetail.nombre}
        </div>

        <div className='detailPrecio'>
         Valor por unidad : ${productDetail.precio}
        </div>
       
        <div className='detailDescripcion'>
          {productDetail.descripcion}
        </div>
        <div className='detailCounter'>
        <Counter showConfirmButton={true} initialQuantity={isInCart(id) ? productDetail.quantity : 1} stock={productDetail.stock} id={productDetail.id} />

        </div>
        </div>


      </div>

    </>

  )
}

export default Detail