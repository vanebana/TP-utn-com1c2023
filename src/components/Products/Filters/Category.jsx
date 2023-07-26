import { useEffect, useState } from "react"

function CategoryFilter({ filters, setFilters, categories }) {


    const [selectedCategories, setSelectedCategories] = useState(categories);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedCategories((prevSelected) => [...prevSelected, value]);
        } else {
            setSelectedCategories((prevSelected) =>
                prevSelected.filter((category) => category !== value)
            );
        }
    };

    useEffect(() => {
       setFilters({ ...filters, category: selectedCategories })
    }, [selectedCategories]) 
   
    

    return (
        <>
            <div className="filtros">
                <h2>Filtrar por categoría </h2>
                <div className="categoryFilters" >
                    {categories.map((category) => (
                        <label key={category} className="checkboxLabel">
                            <input
                                type="checkbox"
                                value={category}
                                checked={selectedCategories.includes(category)}
                                onChange={handleCheckboxChange}
                            />
                            {category}
                        </label>
                    ))}

                </div>

            </div>
        </>
    )
}

export default CategoryFilter