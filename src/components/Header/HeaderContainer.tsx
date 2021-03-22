import Header from './Header';
import React from 'react';
import { connect } from 'react-redux';
import { logout} from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<PropsType> {

    render () {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

 
export default connect(mapStateToProps, {logout})(HeaderContainer);
