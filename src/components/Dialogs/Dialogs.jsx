import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

const Dialogs = (props) => {
    //debugger;
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} />);
  

    const addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    } //onSubmit all localdata from Form


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}


const AddMessageForm = (props) => { 
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field component={'textarea'}
                        name={'newMessageBody'}
                        placeholder={'enter your message'} />
                </div>
                <div>
                    <button className={s.btn}>Send</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm' //form name
})(AddMessageForm)

export default Dialogs;