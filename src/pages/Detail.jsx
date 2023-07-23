import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState} from 'react';
import { useCustomContext } from '../context/ContextProvider';
import Counter from '../components/Cart/Counter';



function Detail() {
    const { products,getProductById, addProductCart, isInCart, getProductCartById  } = useCustomContext()
    const navigate = useNavigate();
    const {id} = useParams()
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id) : getProductById(id))

    useEffect(() => {
        if (!productDetail) {
          navigate('/not-found');
        }
    }, [productDetail]);

    if(!productDetail) {
        return null;
    }

    return (
      <>
      {productDetail.nombre}
      <div>${productDetail.precio}</div>
      <div>
        <img src={productDetail.imagen} alt={productDetail.nombre} />
      </div>
      {productDetail.descripcion}
      <Counter initialQuantity={ isInCart(id) ? productDetail.quantity : 1 } stock={productDetail.stock} id={productDetail.id}/> 

      </>
    
    )
  }
  
  export default Detail