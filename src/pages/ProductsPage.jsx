import '../styles/products.css'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { products } from '../data'

const ProductsPage = () => {
    return (
        <div className='grid'>
            {
                products.map(product => {
                    return (
                        <Link key={product.id} to={`/detailsPage/${product.id}`}>
                            <div className="product__card">
                                <p className="product__outOfStock">Out Of Stock</p>
                                <img src={product.image} alt={product.name} className="product__image" />
                                <p className='product__name'>{product.name}</p>
                                <p>{product.price}</p>
                                <img src={logo} alt="logo" className="logo" />
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ProductsPage