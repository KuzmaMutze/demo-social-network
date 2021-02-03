import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<HeaderContainer/>
				<Nav />
				<div className="app-wrapper-content">
					<Route path="/login" component={ () => <Login/>}/>
					<Route exact path="/dialogs" component={ () => <Dialogs />}/>
					<Route path="/news" component={ () => <News />}/>
					<Route path="/music" component={ () => <Music />}/>
					<Route path="/setting" component={ () => <Setting />}/>
					<Route path="/profile/:userId?" component={ () => <ContentContainer/>}/>
					<Route path="/users" component={ () => <UsersContainer/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
