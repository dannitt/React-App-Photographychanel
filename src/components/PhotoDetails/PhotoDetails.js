import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { photoServiceFactory } from '../../services/photosService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';
import { usePhotoContext} from '../../contexts/PhotoContext';
import { AddComment } from './AddComment/AddComment';
import './PhotoDetails.css';

export const PhotoDetails = () => {
    const { photoId } = useParams();
    const { userId, isAuthenticated } = useAuthContext();
    const { deletePhoto } = usePhotoContext();
    const [ photo, setPhotos] = useState({});
   
    const photosService = useService(photoServiceFactory)
    const navigate = useNavigate();
    

    useEffect(() => {
        Promise.all([
            photosService.getOne(photoId),
            commentService.getAll(photoId),
        ]).then(([photoData, comments]) => {
                console.log(photoData, comments)
                setPhotos({
                    ...photoData,
                    comments,
                });
            })
            // eslint-disable-next-line
    }, [photoId]);
 
    const onCommentSubmit = async (values) => {
        console.log(values)
            
        const response = await commentService.create(photoId, values.username, values.comment);
        console.log(response);
        setPhotos(state => ({
            ...state,
            comments: [...state.comments, {...response}],
        }));
    };
    // const onCommentDeleteClick = async (_id) => {    
    //    await commentService.deleteComment(_id); 
    // //    setPhotos(state => ({
    // //     ...state,
    // //     comments: state.comments.filter(x => x !== comment._id), 
    // //     }));    
    // };

    const isOwner = photo._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line
        const result = confirm(`Delete photo ${photo.name}`)

        if(result) {
            await photosService.delete(photo._id) 

            deletePhoto(photo._id);
            navigate('/catalog'); 
        }     
    };
   
    return (
        <section className="cardDetails">
            <h1 style={{color: "purple"}}>Photo details</h1>
            <div>
                <img src={photo.imageUrl} alt={photo.name} />
                <h5>{photo.genre}</h5>
                <h2>{photo.name}</h2>
            </div>
            <p>{photo.summary}</p>
        {isOwner && ( 
                <div className='actions'>
                <Link to={`/catalog/${photo._id}/edit`} className='cardLinkDetails2'>Edit</Link>
                <button className='button' onClick={onDeleteClick}>Delete</button>
                </div>)}
        
        <div>
                <h2>Comments</h2>
            <ul>
                {photo.comments && photo.comments.map(x => {
                    return(
                        <li className='photoComments' key={x._id}> 
                        <p>{x.username}: {x.comment}</p>

                        {/* <button className='button' onClick={onCommentDeleteClick}>x</button> */}
                        </li>
                    )
                })}
            </ul>
           
            {// eslint-disable-next-line
            photo.comments == '' &&(
                    <p>No comments</p>
                          
                )}
        </div>
                {isAuthenticated &&  < AddComment onCommentSubmit={onCommentSubmit} />}
                

        </section>
         
    );
    
};