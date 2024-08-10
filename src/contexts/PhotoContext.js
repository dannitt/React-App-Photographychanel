import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { photoServiceFactory } from '../services/photosService';

export const PhotoContext = createContext();

export const PhotoProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [photos, setPhotos] = useState([]);
    const photosService = photoServiceFactory(); 

    useEffect (() => {
        photosService.getAll()
          .then(result => {
                setPhotos(result)
            })
           // eslint-disable-next-line
      }, []);

    const onCreatePhotoSubmit = async (data) => {
    
        const newPhoto = await photosService.create(data);
        setPhotos(state => [...state, newPhoto]);
        navigate('/catalog');
    };
    
      const onPhotoEditSubmit = async (values) => {
        const result = await photosService.edit(values._id, values);
    
        setPhotos(state => state.map(x => x._id === values._id ? result : x))
    
        navigate(`/catalog/${values._id}`);
      }

     const deletePhoto = (photoId) => {
      setPhotos(state => state.filter(photo => photo._id !== photoId))
     } 

    const contextValues = {
      photos,
      onCreatePhotoSubmit,
      onPhotoEditSubmit,
      deletePhoto,
    }  

    return(
        <PhotoContext.Provider value={contextValues}>
            {children}
        </PhotoContext.Provider>
    );
}
export const usePhotoContext = () => {
  const context = useContext(PhotoContext);

  return context;
}