import { Link } from 'react-router-dom';
import './CatalogItem.css';

export const CatalogItem = ({
    _id,
    name,
    imageUrl,
    genre,}
) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={name} />
            <h6>{genre}</h6>
            <h2>{name}</h2>
            <Link to={`/catalog/${_id}`} className='cardLinkDetails'> Details</Link>             
        </div>
    );
}