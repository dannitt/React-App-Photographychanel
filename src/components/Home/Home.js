import { useState, useEffect, useCallback } from 'react';
import { LastPhotos } from './LastPhotos/LastPhotos';
import './Home.css';

export const Home = () => {
    const [lastPhotos, setLastPhotos] = useState([]);
    
    useEffect(() => {
        
        fetch('http://localhost:3030/data/photos')
            .then(res => res.json())
            .then(result => {
                setLastPhotos(result.map(x => ({...x, rating: 0})).slice(-3))
                
            })
    }, []);

    const onLikeClick = useCallback((photoId) => {
        setLastPhotos(state => state.map(x => x._id === photoId ? { ...x, rating: x.rating + 1 } : x ))

        
    }, []);

    return (
        <div>
            <h1 className='site-title'>Photography chanel</h1>
            <h4 className='home-title'>Latest published photos</h4>
            <div>
                
                <article className="homePage">
                {lastPhotos.map((photo)   => <LastPhotos  key={photo._id} {...photo} onLikeClick={onLikeClick}/>)}
                </article> 
                {lastPhotos.length === 0 && <p>No photos yet!</p>}
                    
            </div>
        </div>    
    );
};
