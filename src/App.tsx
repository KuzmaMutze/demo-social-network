import React, { Suspense } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspensHoc } from './hoc/withSuspensHoc';
import { AppStateType } from './redux/redux-store';

// import Dialogs from './components/Dialogs/Dialogs';
// import ContentContainer from './components/Content/ContentContainer';
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ContentContainer = React.lazy(() => import('./components/Content/ContentContainer'));

const WithSuspensHocDialogs = withSuspensHoc(Dialogs)
const WithSuspensHocContentContainer = withSuspensHoc(ContentContainer)

type PropsType = {
	initializeApp: () => void
	initialzed: boolean
}

class App extends React.Component<PropsType> {

	componentDidMount() {
        this.props.initializeApp()
    }

	render() {
		if (!this.props.initialzed) {
			return <Preloader/>
		}

		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<div className="circleOne"></div>
				<div className="circleTwo"></div>
				<div className="app-wrapper">
					<HeaderContainer/>
					<Nav />
					<div className="app-wrapper-content">
						<Switch>
							<Route exact path="/" component={() =>  <Redirect to={"/profile"} />}/>
							<Route path="/login" component={ () => <Login/>}/>
							<Route exact path="/dialogs" component={ () => <WithSuspensHocDialogs/> }/>
							<Route path="/news" component={ () => <News />}/>
							<Route path="/music" component={ () => <Music />}/>
							<Route path="/setting" component={ () => <Setting />}/>
							<Route path="/profile/:userId?" component={ () => <WithSuspensHocContentContainer/> }/>
							<Route path="/users" component={ () => <UsersContainer/>}/>
							<Route path="*" component={() => <div>404 NOT FOUND</div>}/> 
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state: AppStateType) => ({
	initialzed: state.app.initialzed
})

export default compose(
	connect(mapStateToProps, {initializeApp})
)(App);
