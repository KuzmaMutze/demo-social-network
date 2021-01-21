import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/ContentItem/Content';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import {BrowserRouter, Route} from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<Nav />
				<div className="app-wrapper-content">
					<Route exact path="/dialogs" component={ () => <Dialogs />}/>
					<Route path="/news" component={ () => <News />}/>
					<Route path="/music" component={ () => <Music />}/>
					<Route path="/setting" component={ () => <Setting />}/>
					<Route path="/content" component={ () => <Content/>}/>
					<Route path="/users" component={ () => <UsersContainer/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
