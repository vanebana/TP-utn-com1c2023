import { useState } from "react"

function Price({ filters, setFilters }) {
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(filters.price.priceTo);

    const changePriceFrom = event => {
        setPriceFrom(parseInt(event.target.value))
    }

    const changePriceTo = event => {
        setPriceTo(parseInt(event.target.value))
    }

    const validatePrices = () => {
        if (parseInt(priceTo) < parseInt(priceFrom)) {
            setPriceFrom(priceTo)
        }

        if (parseInt(priceFrom) > parseInt(priceTo)) {
            setPriceFrom(priceTo)
        }

        setFilters({...filters, price: { priceFrom, priceTo }})

    }
        

    return (
        <>
            <div className="filtros">
                <h2>Filtro precio </h2>
                <div className="filterWrap">
                    <div className="filterPrice">
                        <div className="filterPriceFirst">
                            <p id="rangeValue">desde </p>
                            <input type="number" min="0" max={priceTo} value={priceFrom} onChange={changePriceFrom} />
                        </div>

                       
                        <div className="filterPriceSecond">
                            <p id="rangeValue">hasta </p>
                            <input type="number" min="0" max={filters.price.priceTo} value={priceTo} onChange={changePriceTo} />
                        </div>
                    </div>
                </div>
                <button onClick={validatePrices}>actualizar</button>

            </div>
        </>
    )
}

export default Price