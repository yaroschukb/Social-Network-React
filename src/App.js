import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Nav from './components/Nav/Nav.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import NewsContainer from './components/News/NewsContainer.js';
import Login from './../src/components/Login/Login.js';
import {BrowserRouter, Route, withRouter}from 'react-router-dom';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './Redux/app-reduser';
import Preloader from './components/common/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersPage from './components/Users/UsersPage';
import ProfileContainer from './components/Profile/ProfileContainer.js'
//const DialogsContainer = React.lazy (()=> import('./components/Dialogs/DialogsContainer'));
//const ProfileContainer = React.lazy (()=> import('./components/Profile/ProfileContainer'));
//const UsersPage = React.lazy (()=> import('./components/Users/UsersPage'));


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
  <div className="app-wrapper">
    <HeaderContainer />
    <Nav /> 
     <div className = "app-wrapper-content">
       <Route path="/Dialogs" render ={ () => <DialogsContainer /> } />
       <Route path="/Profile/:userId?" render={ () => <ProfileContainer /> } />
       <Route path="/Users" render={() => <UsersPage />} />
       <Route path="/News" render ={() => <NewsContainer />} />
       <Route path="/Music" render ={() => <Music />} />
       <Route path="/Settings" render ={() => <Settings />} />
       <Route path="/Login" render ={() => <Login />} />
     </div>
    <Footer />
  </div>
   </BrowserRouter>
  );
  }
 };


let mapStateToProps = (store) => {
  return {
    initialized: store.app.initialized,
  }
};


export default compose(
  withRouter,
  connect(mapStateToProps,{initializeApp}) 
) 
(App);
