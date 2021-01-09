import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from './../../components/HOC/withAuhRedirect'
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,//перериуйся если чтото изменилось
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());//диспатчим 
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
) (Dialogs);//HOC