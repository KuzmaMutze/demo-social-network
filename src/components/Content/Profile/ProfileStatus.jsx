import React from "react";

class ProfileStatus extends React.Component {

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

    onStatusChange = (e) => {
        debugger
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if ( prevState.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {
        return (
            <div>
                {this.state.editMode ? 

                    <div  onBlur={this.disableEditMode} onDoubleClick={ this.disableEditMode }>
                        <input onChange={this.onStatusChange} autoFocus={true}  value={this.state.status}></input>
                    </div>

                    : <div onDoubleClick={ this.activeteEditMode }><span>{this.props.status || "set status"}</span></div>
                }
            </div>
        )
    }
    
};
export default ProfileStatus;