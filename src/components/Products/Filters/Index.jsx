import CategoryFilter from "./Category"
import PriceFilter from "./Price"

const Filters = ({ filters, setFilters, categories }) => {
    return (
        <>
            <PriceFilter filters={filters} setFilters={setFilters} />
            <CategoryFilter filters={filters} setFilters={setFilters} categories={categories}/>
        </>
    )
}
export default Filters