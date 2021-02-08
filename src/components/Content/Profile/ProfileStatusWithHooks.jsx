import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    
    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }

    const disableMode = () => {
        setEditMode(false);
        props.updateStatusProfile(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {editMode ?

                <div>
                    <input onChange={onStatusChange} onBlur={disableMode} onClick={disableMode} value={status} autoFocus={true}></input>
                </div>

                : <div onClick={activateMode} ><span>{props.status || "set status"}</span></div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;