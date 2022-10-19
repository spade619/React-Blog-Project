import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('alnil');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
           // history.go(-1); go back 1 step history
           history.push('/');
        })
    
    }

    return ( 
        <div className="create">
            <h2>New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                  
                <select
                       value={author}
                       onChange={(e) => setAuthor(e.target.value)}
                >
                  
                    <option value="alnil">alnil</option>
                    <option value="nicole">nicole</option>
                    
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>posting Blog...</button>}
                
            </form>
        </div>
     );
}
 
export default Create ;