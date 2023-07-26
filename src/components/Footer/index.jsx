import { useCustomContext } from "../../context/ContextProvider"

function Footer() {
    const { getCategories, products } = useCustomContext()
    const categories = getCategories()

    return (
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <div>
                        <a href="#">Inicio</a>
                    </div>
                    <div>
                        <a href="#">Productos</a>
                        <ul className="footer-category">
                            {products.filter((p, i) => i < 5).map(prod => <li key={prod.id}>{prod.nombre}</li>)}
                        </ul>
                    </div>
                    <div>
                        <a href="#">Servicios</a>
                        <ul className="footer-category">
                            <li>Categoría 1</li>
                            <li>Categoría 2</li>
                            <li>Categoría 3</li>
                            <li>Categoría 4</li>
                            <li>Categoría 5</li>
                        </ul>
                    </div>
                    <div>
                        <a href="#">Categorias</a>
                        <ul className="footer-category">
                            {categories.map(cat => <li key={cat}>{cat}</li>)}
                        </ul>
                    </div>
                    <div>
                        <a href="#">Contacto</a>
                        <ul className="footer-category">
                            <li>Categoría 1</li>
                            <li>Categoría 2</li>
                            <li>Categoría 3</li>
                            <li>Categoría 4</li>
                            <li>Categoría 5</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-text">
                &copy; 2023 MyShop. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer