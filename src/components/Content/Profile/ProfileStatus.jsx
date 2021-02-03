import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false
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
    }

    render () {
        return (
            <div>
                {this.state.editMode ? 
                    <div onBlur={this.disableEditMode} onDoubleClick={ this.disableEditMode }><input autoFocus={true}  value={this.props.status}></input></div>
                    : <div onDoubleClick={ this.activeteEditMode }><span>{this.props.status}</span></div>
                }
            </div>
        )
    }
};

export default ProfileStatus;