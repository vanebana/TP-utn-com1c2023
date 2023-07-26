import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../context/ContextProvider'

const Counter = ({initialQuantity, stock, id, showConfirmButton=false}) => {
    const {addProductCart } = useCustomContext()
    const [quantity, setQuantity] = useState(initialQuantity)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
    }

    useEffect(()=>{
        if(!showConfirmButton){
            addProductCart(id, quantity)}
    }, [quantity])

    return (
        <>
            <div className='counter'>
                <button  className="buttonCounter" onClick={() => setQuantity(quantity >1 ? quantity - 1 : quantity)} >-</button>
                <span className='numCounter'>{quantity}</span>
                <button className="buttonCounter"  onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            {showConfirmButton && <button className='buttonConfirmar' onClick={onClickAddProduct}>Confirmar</button>}
        </>
    )
}

export default Counter