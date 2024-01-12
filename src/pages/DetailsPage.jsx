import '../styles/ProductsDetailsPage.css'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data'

const DetailsPage = () => {
    const { id } = useParams()
    const productId = parseInt(id)
    const detail = products.find(product => product.id === productId)

    return (
        <section className="detailsPage">
            
            <div className="detailsPage__heading">
                <h1>Details</h1>
            </div>
            <div className="detailsPage__body">
                <img src={detail.image} alt={detail.name} className="detailsPage__image" />
                <div className="detailsPage__Description">
                    <h1>{detail.name}</h1>
                    <h3>Description:</h3>
                    <p>{detail.description}</p>
                    <h3>Ingredients: {detail.ingredients}</h3>
                    <p className="detailsPage__price">{detail.price}</p>
                    <Link to={'tel:+2348055431383'}><button>CALL TO ORDER</button></Link>
                    
                </div>
            </div>
        </section>
    )
}
export default DetailsPage