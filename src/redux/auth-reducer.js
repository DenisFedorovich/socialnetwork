import { authAPI } from './../components/Api/api';

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
               ...state,
               ...action.data,
               isAuth: true,
            }
        default:
            return state;
    }
}

//users: [...state.users]}
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login} });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
      .then(response => { 
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          dispatch(setAuthUserData(id, email, login))
        }
      });

}/*отправяем запрос на me  и он сообщает, залогигнены или нет,
если да, то возвр resultCode === 0, и тогда id, email, login сетаем в
в стейт и мняем флаг с фалс на тру*/
export default authReducer;