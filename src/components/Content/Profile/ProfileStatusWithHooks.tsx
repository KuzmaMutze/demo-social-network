import React, { useEffect, useState } from "react";
import classes from './Profile.module.css';

type PropsType = {
    status: string
    updateStatusProfile: (status: string) => void
    // onStatusChange: () => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

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

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={classes.wrapper}>
            {editMode ?
                <div >  
                    Status: <input onChange={onStatusChange} onBlur={disableMode} onClick={disableMode} value={status} autoFocus={true}></input>
                </div>

                : <div onClick={activateMode} ><b>Status:</b><span className={classes.statusUpload}> {props.status || "set status"}</span></div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;