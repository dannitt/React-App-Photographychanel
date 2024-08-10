import { useForm } from "../../../hooks/useForm";
import '../PhotoDetails.css';

export const AddComment = ({
    onCommentSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        username: '',
        comment: '',
    }, onCommentSubmit);

    return (
        <article>
        <section>
            
            <label style={{color: "purple"}}>Add new comment:</label>
            <form className="add-commemt" onSubmit={onSubmit}>
                <input type="text" name="username" placeholder="Your name here..." value={values.username} onChange={changeHandler} /> 
                <textarea name="comment" placeholder="Comment..." value={values.comment} onChange={changeHandler}></textarea>
                <input type="submit" value="Add comment" />
            </form>
        </section>
    </article>
    )
}