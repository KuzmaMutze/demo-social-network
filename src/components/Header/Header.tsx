import { Avatar, Button, Col, Layout, Menu, Row } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth-reducer';
import classes from './Header.module.css';
import { selectGetIsAuth, selectGetLogin } from '../../redux/selectors/header-selectors';

export type PropsType = {

}   

const { Header } = Layout

export const AppHeader: React.FC<PropsType> = (props) => {
    
    const dispatch = useDispatch()

    const isAuth = useSelector(selectGetIsAuth) 
    const login = useSelector(selectGetLogin) 
    
    const logoutCallBack = () => {
        dispatch(logout())
    }
    return (
        <Header className="header">
            {/* <div  >
                <NavLink  to={"/profile"}>
                    Company name
                </NavLink>
            </div> */}
			<Row>
				<Col span={18}>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
						<Menu.Item key="1">
							<NavLink to="/users">
								Developers
							</NavLink>
						</Menu.Item>
						{/* <Menu.Item key="2">nav 2</Menu.Item>
						<Menu.Item key="3">nav 3</Menu.Item> */}
					</Menu>
				</Col>
				<Col span={6}>
                    {isAuth ?
                    <div className={classes.logout}>
                    <Avatar style={{ backgroundColor: '#87d068', marginBottom: '3px' }} icon={<UserOutlined />} />
                    <span className={classes.login}>{login}</span> <Button onClick={logoutCallBack}>Log out</Button>
                    </div> 
                    : <Button>
                        <NavLink to={"/login"}> Sign in </NavLink>    
                    </Button>}
				</Col>
			</Row>
		</Header>
        
        // <header className={classes.header}>
        //     <div className={classes.logo} >
        //         <NavLink  to={"/profile"}>
        //             Company name
        //         </NavLink>
        //     </div>
        //     <div className={classes.loginBlock}>
        //         
        //     </div>
        // </header>
    )
}
