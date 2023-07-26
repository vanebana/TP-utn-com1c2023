import React,{createContext, useContext, useState} from 'react'
import products from '/public/products.json'

const Context = createContext()

const ContextProvider = ({children}) => {
    const getProductById = (id) =>{
        return products.find(producto => producto.id === Number(id))
    }
    const getProductCartById =(id) => {
        return cart.find(producto => producto.id === Number(id))
    }
    const removeProduct = (id) =>{
        setCart(cart.filter(producto => producto.id !== Number(id)))
    }
    const getMaxPrice = () => {
        const listPrice = products.map(products => products.precio)
        return Math.max(...listPrice)
    }
    const getCategories = () => {
        const allCategories = products.map(products => products.categoria)
        const categories = []
        allCategories.forEach(element => {
            if (!categories.includes(element)) {
                categories.push(element)

            }
        });

        return categories;
    }

    /* El estado del array de objetos del carrito */
    const [cart, setCart] = useState([])
    const restartCart = () =>{
        setCart([])
    }

    const isInCart = (id) => cart.some(producto => producto.id === Number(id))
    
    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
    }

    const getTotal = () => {
        let total = 0
        cart.forEach(product => total += product.precio * product.quantity)
        return total
    }
    
    return (
        <Context.Provider value={{ products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal, removeProduct, restartCart, getMaxPrice, getCategories }}>
            {children}
        </Context.Provider>
    )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider