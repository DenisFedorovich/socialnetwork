import React from 'react';
import Post from './Post/Post';
import s from './Mypost.module.css';
import { reduxForm, Field } from 'redux-form';


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    const onAddPost = (value) => {
        props.addPost(value.newPostText);
    } //onSubmit all localdata from Form

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={'textarea'}
                        name={'newPostText'}
                        placeholder={'enter your message'} />
                </div>
                <div>
                    <button className={s.btn}>Send</button>
                </div>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({
    form: 'ProfileAddNewPostForm' //form name
})(AddNewPostForm)


export default MyPosts;