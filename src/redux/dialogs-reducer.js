const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
    
};

const dialogsReducer = (state = initialState, action) => {
    //делаем только копию того, что меняется

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;


/*
switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
        return  {
            ...state,
            newMessageBody: action.body,
        };
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body }],
        };
    default:
        return state;
}
*/