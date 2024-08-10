import { requestFactory } from './reguester'; 

const baseUrl = 'http://localhost:3030/data/photos';

export const photoServiceFactory = (token) => {
    const request = requestFactory(token);

const getAll = async () => {
    const result = await request.get(baseUrl); 
    const photos = Object.values(result);
    
    return photos; 
};

const getOne = async (photoId) => {
    const result = await request.get(`${baseUrl}/${photoId}`); 
    return result;
};

const create = async (photoData) => {
    const result = await request.post(baseUrl, photoData);

    return result;
};

const edit = (photoId, data) => request.put(`${baseUrl}/${photoId}`, data);

const deletePhoto = (photoId) => request.delete(`${baseUrl}/${photoId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deletePhoto,
    };
};
