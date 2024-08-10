import { requestFactory } from './reguester';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async (photoId) => {
    const request = requestFactory();

    const query = encodeURIComponent(`photoId="${photoId}"`)
    const result = await request.get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result)

    return comments;
};

export const create = async (photoId, username, comment) => {
    const request = requestFactory();

    const result = await request.post(baseUrl, {photoId, username, comment});
    
    return result;
};
// export const deleteComment = async (photoId, _id) => {
//     const request = requestFactory();
//     const query = encodeURIComponent(`photoId="${photoId}"`)
//     await request.delete(`${baseUrl}?where=${query}`);
// }