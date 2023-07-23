import React, { useState } from 'react'
import { useCustomContext } from '../../context/ContextProvider'

const Counter = ({initialQuantity, stock, id}) => {
    const {addProductCart } = useCustomContext()
    const [quantity, setQuantity] = useState(initialQuantity)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
    }
    return (
        <>
            <div>
                <button onClick={() => setQuantity(quantity >1 ? quantity - 1 : quantity)} >-</button>
                <span>{quantity}</span>
                <button  onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            <button onClick={onClickAddProduct}>Confirmar</button>
        </>
    )
}

export default Counter