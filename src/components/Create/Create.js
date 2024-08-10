import { usePhotoContext } from '../../contexts/PhotoContext';
import { useForm } from '../../hooks/useForm';
import './Create.css'; 

export const Create = () => {
    const { onCreatePhotoSubmit} = usePhotoContext();
const { values, changeHandler, onSubmit } = useForm({
    name: '',
    imageUrl: '',
    genre: '',
    summary: '',
}, onCreatePhotoSubmit);

    return (
        <section className='create'>
            <h3>Create</h3>
                <form id="create" method='POST' onSubmit={onSubmit}>
                    <h2>Photo here</h2>
                    <label>Title</label>
                    <input value={values.name} onChange={changeHandler} type="text" id="name" name="name" placeholder="Enter name here" />

                    <label>Image</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Enter photo here" />

                    <label>Genre</label>
                    <input value={values.genre} onChange={changeHandler} type="text" id="genre" name="genre" placeholder="Enter genre here" />
                    
                    <label>Summary</label>
                    <input value={values.summary} onChange={changeHandler} type="text" id="summary" name="summary" placeholder="Enter summary here" />
                    <input type="submit" value="Create photo"/>
                </form>
        </section>
        
        
    );
}