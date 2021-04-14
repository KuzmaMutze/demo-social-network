import classes from "*.module.css";
import { type } from "os";
import React, { ChangeEvent } from "react";

type PropsType = {
    status: string
    updateStatusProfile: (status: string) => void
}

type StateType = {
    status: string
    editMode: boolean
}

class ProfileStatus extends React.Component<PropsType, StateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    disableEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusProfile(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if ( prevState.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {
        return (
            <div className={classes.wrapper}>
                {this.state.editMode ? 

                    <div onBlur={this.disableEditMode} onDoubleClick={ this.disableEditMode }>
                        <input onChange={this.onStatusChange} autoFocus={true}  value={this.state.status}></input>
                    </div>

                    : <div onDoubleClick={ this.activeteEditMode }><span>{this.props.status || "set status"}</span></div>
                }
            </div>
        )
    }
    
};
export default ProfileStatus;