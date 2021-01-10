import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { usersAPI } from '../Api/api';
import { Redirect } from 'react-router-dom';
import {withAuthRedirect} from './../../components/HOC/withAuhRedirect'
import { compose } from 'redux';


class ProfileContainer extends React.Component {


  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);

  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter,
  //withAuthRedirect
) (ProfileContainer);


/*
let WithUrlDataContainerComponent = withRouter(authRedirectComponent);

let authRedirectComponent = withAuthRedirect(ProfileContainer);//HOC

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);// в коннект данные из урла закинули
*/