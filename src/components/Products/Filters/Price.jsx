import { useState } from "react"
import { useCustomContext } from "../../../context/ContextProvider";

function Price({ filters, setFilters }) {
    const { getMaxPrice } = useCustomContext()
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(filters.price.priceTo);
    const priceMax = getMaxPrice()

    const changePriceFrom = event => {
        const from = isNaN(parseInt(event.target.value)) ? 0 : parseInt(event.target.value)
        setPriceFrom(from)
    }

    const changePriceTo = event => {
        const to = isNaN(parseInt(event.target.value)) ? priceMax : parseInt(event.target.value)
        setPriceTo(to)
    }

    const validatePrices = () => {
        let to = priceTo;
        let from = priceFrom;

        if (parseInt(priceFrom) > parseInt(priceTo)) {
            from = 0
            setPriceFrom(from)
            to = priceMax
            setPriceTo(to)
        }

        

        setFilters({...filters, price: { priceFrom: from, priceTo: to }})

    }
        

    return (
        <>
            <div className="filtros">
                <h2>Filtrar por precio </h2>
                <div className="filterParent">
                <div className="filterWrap">
                    <div className="filterPrice">
                        <div className="filterPriceFirst">
                            <p id="rangeValue">Desde </p>
                            <input type="number" min="0" max={priceTo} value={priceFrom} onChange={changePriceFrom} />
                        </div>

                       
                        <div className="filterPriceSecond">
                            <p id="rangeValue">Hasta </p>
                            <input type="number" min="0" max={filters.price.priceTo } value={priceTo} onChange={changePriceTo} />
                        </div>
                    </div>
                </div>
                <button onClick={validatePrices}>Filtrar</button>
                </div>

            </div>
        </>
    )
}

export default Price