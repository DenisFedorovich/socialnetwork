import React, { useState, useEffect } from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (

    <div>
      {!editMode &&
        <div className={classes.status} >
          <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
        </div>
      }
      {editMode &&
        <div>
          <input
            className={classes.inp}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      }
    </div>
  )
}


export default ProfileStatusWithHooks;

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