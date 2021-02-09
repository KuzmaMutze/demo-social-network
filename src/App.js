import React, { Suspense } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redax/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspensHoc } from './hoc/withSuspensHoc';

// import Dialogs from './components/Dialogs/Dialogs';
// import ContentContainer from './components/Content/ContentContainer';
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ContentContainer = React.lazy(() => import('./components/Content/ContentContainer'));

class App extends React.Component {

	componentDidMount() {
        this.props.initializeApp()
    }

	render() {
		if (!this.props.initialzed) {
			debugger
			return <Preloader/>
		}

		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<div className="app-wrapper">
					<HeaderContainer/>
					<Nav />
					<div className="app-wrapper-content">
						<Route path="/login" component={ () => <Login/>}/>
						<Route exact path="/dialogs" component={ withSuspensHoc(Dialogs) }/>
						<Route path="/news" component={ () => <News />}/>
						<Route path="/music" component={ () => <Music />}/>
						<Route path="/setting" component={ () => <Setting />}/>
						<Route path="/profile/:userId?" component={ withSuspensHoc(ContentContainer)}/>
						<Route path="/users" component={ () => <UsersContainer/>}/>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	initialzed: state.app.initialzed
})

export default compose(
	connect(mapStateToProps, {initializeApp})
)(App);
