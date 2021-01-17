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


const App = (props) => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<Nav state={props.state.navbar}/>
				<div className="app-wrapper-content">
					<Route exact path="/dialogs" component={ () => <Dialogs dispatch={props.dispatch} dialogsPage={props.state.dialogsPage}/>}/>
					<Route path="/news" component={ () => <News />}/>
					<Route path="/music" component={ () => <Music />}/>
					<Route path="/setting" component={ () => <Setting />}/>
					<Route path="/content" component={ () => <Content store={props.store}/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
