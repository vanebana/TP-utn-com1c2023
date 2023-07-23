import {BsSearch} from 'react-icons/bs'
function Search() {

    return (
        <>
            <div className="contenedorBuscador">
                <div className="buscador">
                    <input type="text" placeholder="Search goods ..." />
                    <span className="icono"><BsSearch /> </span>
                </div>
            </div>
        </>
    )
}

export default Search
