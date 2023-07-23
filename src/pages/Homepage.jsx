import { useEffect, useState } from "react";
import Products from "../components/Products"
import Filters from "../components/Products/Filters"
import { useCustomContext } from "../context/ContextProvider";


function Homepage() {
  const { products } = useCustomContext()
  const allCategories = products.map(products => products.categoria)
  const categories = []
   allCategories.forEach(element => {
      if (!categories.includes(element)) {
          categories.push(element)

      }
  });
  const listPrice = products.map(products => products.precio)
  const precioMayor = Math.max(...listPrice)
  const [filters , setFilters] = useState(
    {
      category: categories,
      price:{
        priceFrom: 0,
        priceTo: precioMayor
      }
    }
  )

  return (
    <>
      <div className="contenedorHomepage">
        <section>
          <Products data={products} filters={filters} />
        </section>
        <aside>
          <div className="filterWrap">
          <Filters filters={filters} setFilters={setFilters} categories={categories} />
          </div>
        </aside>
      </div>
    </>
  )
}

export default Homepage