import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    title: 'yo'
  };//local state

  /*activateEditMode = () => {
    this.setState({
      editMode: true
    });
    //this.forceUpdate();method for update
  };//method without bind*/

  activateEditMode() {
    this.setState({
      editMode: true
    });
  }//method with bind*/

  deactivateEditMode() {
    this.setState({
      editMode: false
    });
  }

  //setState - local state method

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
            <input placeholder="Введите статус" autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;


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