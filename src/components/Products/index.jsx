import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products({ data, filters, children }) {
  const [productosFiltrados, setProductosFiltrados]= useState(data)
  
  useEffect(()=>{ 
    setProductosFiltrados(data.filter(item=>{
      return filters.category.includes(item.categoria) && (filters.price.priceFrom <= item.precio && filters.price.priceTo>=item.precio)
    })) 
  }, [filters])

  return (
    <div className='cardContainer' >
      {productosFiltrados.map((product) => (
        <Link to={"/detail/"+product.id} className="productCard" key={product.id}>
          <img src={product.imagen} alt={product.nombre} />
          <h2> {product.nombre}</h2>
          <h3>$ {product.precio}</h3>
          <p>{product.categoria}</p>
        </Link>
      ))}
      
    </div>
  )
}

export default Products;