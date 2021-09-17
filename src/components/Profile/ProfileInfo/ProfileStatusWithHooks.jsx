import React, {useEffect, useState} from 'react';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);


    useEffect(() => {
        setStatus(props.status);
        console.log('useEffect, setStatus(props.status)' + ' props.status= ' + props.status + ' status = ' + status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
        console.log('activateEditMode')
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        console.log('deactivateEditMode - 1 ' + ' props.status= ' + props.status + ' status = ' + status)
        props.updateStatus(status);
        console.log('deactivateEditMode - 2 ' + ' props.status= ' + props.status + ' status = ' + status)
    }
    const onStatusChange = (e) => {
        console.log('onStatusChange - 1 ' + ' props.status= ' + props.status + ' status = ' + status + ' e.currentTarget.value = ' + e.currentTarget.value)
        setStatus(e.currentTarget.value);
        console.log('onStatusChange - 2 ' + ' props.status= ' + props.status + ' status = ' + status+ ' e.currentTarget.value = ' + e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || '-----'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}></input>
            </div>
            }
            {console.log('render was finished')}
        </div>
    )

}

export default ProfileStatusWithHooks