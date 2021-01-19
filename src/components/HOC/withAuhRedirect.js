import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,// для редиректа если не залогинен
  })

export const withAuthRedirect = ( Component )  => {

    class RedirectComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Redirect to={"/login"} />;//для редиректа
            return <Component {...this.props}/>
        }
    }
  
let ConnectedAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent);
   
return ConnectedAuthRedirectComponent;

}//HOC 