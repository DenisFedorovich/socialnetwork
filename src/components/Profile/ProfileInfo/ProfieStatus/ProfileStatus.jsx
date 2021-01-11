import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  }//local state

  activateEditMode() {
    this.setState({
      editMode: true
    });
  }//method with bind*/

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  } //статус синхронизорован с локальным стейтом

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div className={classes.status} >
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input placeholder="Введите статус"
              autoFocus={true}
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              value={this.state.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;

/*activateEditMode = () => {
    this.setState({
      editMode: true
    });
    //this.forceUpdate();method for update
  };//method without bind*/

//setState - local state method

/*{!this.state.editMode &&
  < div >
    <span onDoubleClick={() => (this.activateEditMode)
        onDoubleClick={()=> { this.activateEditMode.bind(this) }}>{this.props.status}</span>
  </div>
}
{this.state.editMode &&
  < div >
    <input value={this.props.status} />
  </div>
}</div>*/