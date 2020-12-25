import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import NewsContainer from './components/News/NewsContainer.js';
import Login from './../src/components/Login/Login.js';
import {BrowserRouter, Link, NavLink, Route, withRouter}from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './Redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import FooterComponent from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersPage from './components/Users/UsersPage';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import { Layout, Menu } from 'antd';
import About from './components/Footer/About';
import { 
  SettingOutlined, 
  TeamOutlined, 
  MailOutlined, 
  HomeOutlined, 
  PlayCircleOutlined, 
  ReadOutlined
} from '@ant-design/icons';

const { Content, Footer, Sider } = Layout;
const alignMenuItems = { display: 'flex', alignItems: 'baseline'}

class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
      alert('some error occured')
      console.log(promiseRejectionEvent)
    }

    componentDidMount(){
      this.props.initializeApp()
      window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    componentWillUnmount(){
      window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
    }

    render() {
        if(!this.props.initialized){
          return <Preloader/>;
      };

    return (
      <BrowserRouter>
        <Layout style={{margin: '0 auto'}}>
          <HeaderContainer />
          <Content style={{ padding: '0 50px', background:'#f6ffed'}}>
              <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Sider className="site-layout-background" width={200}>
                  <Menu
                    mode="vertical"
                    style={{ height: '100%'}}
                  >
                    <Menu.Item key="1" icon={<HomeOutlined />} style={alignMenuItems}> 
                      <NavLink to="/Profile">Profile</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<TeamOutlined />} style={alignMenuItems}>
                      <NavLink to="/Users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<MailOutlined />} style={alignMenuItems}>
                      <NavLink to="/Dialogs">Message</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<ReadOutlined />} style={alignMenuItems}>
                      <NavLink to="/News">News</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<PlayCircleOutlined />} style={alignMenuItems}>
                      <NavLink to="/Music">Music</NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SettingOutlined />} style={alignMenuItems}>
                      <NavLink to="/Settings">Settings</NavLink>
                    </Menu.Item>
                    <Menu.Item key="7" disabled>
                      <About />
                    </Menu.Item>
                  </Menu>
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                  <Route path="/Dialogs" render ={ () => <DialogsContainer /> } />
                  <Route path="/Profile/:userId?" render={ () => <ProfileContainer /> } />
                  <Route path="/Users" render={() => <UsersPage />} />
                  <Route path="/News" render ={() => <NewsContainer />} />
                  <Route path="/Music" render ={() => <Music />} />
                  <Route path="/Settings" render ={() => <Settings />} />
                  <Route path="/Login" render ={() => <Login />} />
                </Content>
              </Layout>
          </Content>
          <Footer style={{ background:'#00474f', color:'#fff', fontSize:'20px' }}><FooterComponent /></Footer>
        </Layout>
      </BrowserRouter>
    )}
 };

let mapStateToProps = (store) => {
  return {
    initialized: store.app.initialized,
  }
};

export default compose(
  withRouter,
  connect(mapStateToProps,{initializeApp}) 
)(App);

