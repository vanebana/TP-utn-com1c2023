import { useEffect, useState } from "react";
import Products from "../components/Products"
import Filters from "../components/Products/Filters"
import { useCustomContext } from "../context/ContextProvider";


function Homepage() {
  const { products, getMaxPrice, getCategories } = useCustomContext()
  const categories = getCategories()
  
  const [filters , setFilters] = useState(
    {
      category: categories,
      price:{
        priceFrom: 0,
        priceTo: getMaxPrice()
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