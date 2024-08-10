import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { photoServiceFactory } from "../../services/photosService";
import { usePhotoContext } from "../../contexts/PhotoContext";
import './EditPhoto.css';

export const EditPhoto = () => {
    const {onPhotoEditSubmit} = usePhotoContext();
    const { photoId} = useParams();
    const photosService = useService(photoServiceFactory)
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        name: '',
        imageUrl: '',
        genre: '',
        summary: '',
    }, onPhotoEditSubmit);

    useEffect(() => {
        photosService.getOne(photoId)
            .then(result => {
                changeValues(result);
            });      
            // eslint-disable-next-line
    }, [photoId]);
 
    return (
        <section>
                <h1>Edit Photo-details</h1>
                <form className="edit" id="edit" method='POST' onSubmit={onSubmit}>
                    <h2>Edit photo details here</h2>
                    <label>Title</label>
                    <input value={values.name} onChange={changeHandler} type="text" id="name" name="name" placeholder="Enter name here" />

                    <label>Image</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Enter photo here" />

                    <label>Genre</label>
                    <input value={values.genre} onChange={changeHandler} type="text" id="genre" name="genre" placeholder="Enter genre here" />
                    
                    <label>Summary</label>
                    <input value={values.summary} onChange={changeHandler} type="text" id="summary" name="summary" placeholder="Enter summary here" />
                    <input type="submit" value="Edit photo"/>
                </form>

        </section>
    )
};
