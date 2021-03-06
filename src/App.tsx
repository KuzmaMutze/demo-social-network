import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import { UsersPage } from './components/Users/UsersContainer'; 
import { Login } from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspensHoc } from './hoc/withSuspensHoc';
import { AppStateType } from './redux/redux-store';
import { Layout, Menu, Breadcrumb, } from 'antd';
import { UserOutlined, LaptopOutlined, SettingOutlined } from '@ant-design/icons';
import { AppHeader } from './components/Header/Header';
const { SubMenu } = Menu;
const { Content, Footer, Sider } = Layout;

// export components's must be defaults
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const ContentContainer = React.lazy(() => import('./components/Content/ContentContainer'));
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'));

const WithSuspensHocDialogs = withSuspensHoc(Dialogs)
const WithSuspensHocContentContainer = withSuspensHoc(ContentContainer)
const WithSuspensHocChatPage = withSuspensHoc(ChatPage)

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
			<Layout>
			<AppHeader/>
			<Content style={{ padding: '0 50px' }}>
			<Layout className="site-layout-background" style={{ padding: '24px 0' }}>
				<Sider className="site-layout-background" width={200}>
				<Menu
					mode="inline"
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub1']}
					style={{ height: '100%' }}
				>
					<SubMenu key="sub1" icon={<UserOutlined />} title="Menu">
						<Menu.Item key="1">
							<NavLink to="/profile">Profile</NavLink>
						</Menu.Item>
						<Menu.Item key="2">
							<NavLink to="/messages">Messages</NavLink>
						</Menu.Item>
						<Menu.Item key="3">
							<NavLink to="/music">Music</NavLink>
						</Menu.Item>
						<Menu.Item key="4">
							<NavLink to="/news">News</NavLink>
						</Menu.Item>
						<Menu.Item key="5">
							<NavLink to="/chat">Chat</NavLink>
						</Menu.Item>
					</SubMenu>
					<SubMenu key="sub2" icon={<LaptopOutlined />} title="Developers">
						<Menu.Item key="6">
							<NavLink to="/users">Developers</NavLink>
						</Menu.Item>
					</SubMenu>
					<SubMenu key="sub3" icon={<SettingOutlined />} title="Tools">
						<Menu.Item key="7">
							<NavLink to="/setting">Setting</NavLink>
						</Menu.Item>
					</SubMenu>
				</Menu>
				</Sider>
				<Content style={{ padding: '0 24px', minHeight: 280 }}>
					
					<Switch>
						<Route exact path="/" component={() =>  <Redirect to={"/profile"} />}/>
						<Route path="/login" component={ () => <Login/>}/>
						<Route exact path="/messages" component={ () => <WithSuspensHocDialogs/> }/>
						<Route path="/news" component={ () => <News />}/>
						<Route path="/music" component={ () => <Music />}/>
						<Route path="/setting" component={ () => <Setting />}/>
						<Route path="/profile/:userId?" component={ () => <WithSuspensHocContentContainer/> }/>
						<Route path="/users" component={ () => <UsersPage/>}/>
						<Route path="/chat" component={ () => <WithSuspensHocChatPage/>}/>
						<Route path="*" component={() => <div>404 NOT FOUND</div>}/> 
					</Switch>

				</Content>
			</Layout>
			</Content>

				<Footer style={{ textAlign: 'center' }}>Social Network ©2021</Footer>

			</Layout>
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
