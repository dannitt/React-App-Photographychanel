import { Link } from 'react-router-dom';
import './LastPhotos.css';

export const LastPhotos = ({
    _id,
    imageUrl,
    name,
    summary,
    onLikeClick,
    rating,
}) => {
    let likes = [];
    for (let i=0; i<rating; i++) {
        likes.push(<span>*</span>)
    }

    return (

        <div className='cardLastPhoto' key={_id}>
        <div>
            <img className='photoImage' src={imageUrl} alt={name} />
        </div>
            <article className='cardLastPhotoIn'>
            <h2>{name}</h2>
           
        <p>{summary}</p>
        </article>
        <Link to={`/catalog/${_id}`} className='cardLinkDetails'> Details</Link> 
        <button onClick={() => onLikeClick(_id)}>Like</button> 
        {likes}
    </div> 
    )
}