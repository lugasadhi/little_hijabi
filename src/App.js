import React, { Component } from 'react';
import {  
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/view/home';
import Login from './pages/view/login';
import Page404 from './pages/view/page404';
import Pages from './pages/view/pages';
import Admin from './pages/admin/admin';
import Dashboard from './pages/admin/dashboard';

import Header from './pages/shared/header';
import Footer from './pages/shared/footer';
import Sidebar from './pages/shared/sidebar';


import './assets/js/script.js'

class App extends Component {

  state={ };


  constructor() {
    super();
    this.state.headerType='';
    this.state.footerType='';
    this.state.routes =[
      {
        path: "/",
        component: Home
      },{
        path: "/login",
        component: Login
      },{
        path: "/home",
        component: Home
      },{
        path: "/pages/:id",
        component: Pages
      },{
        path:"/admin",
        component: Admin,
        routes: [
          {
            path: "/admin/dashboard",
            component: Dashboard
          }
        ]
      }
    ];
  }
  
  render() {
    return (
      <div>
        <Header key="header" headerType={this.state.headerType} />
        <Sidebar key="sidebar" />
        <div className={this.isHasHeader() || this.isHasFooter()}>
          <Switch>
            {this.state.routes.map(dd => (
              <Route path={dd.path} key={dd.component} exact component={()=>
                <dd.component  
                  changeHeaderType={this.onChangeHeaderType.bind(this)}
                  changeFooterType={this.onChangeFooterType.bind(this)}
                />
              }/>
            ))}
         
            <Route  key="Page404"   component={()=>
                <Page404 
                  changeHeaderType={this.onChangeHeaderType.bind(this)}
                  changeFooterType={this.onChangeFooterType.bind(this)}
                />
            } />
            
          </Switch>
        </div> 
        <Footer  key="footer"  footerType={this.state.footerType} />
      </div>

    );
  }
  

  isHasHeader(){
    const cls = 'body-content-page  ';
    if(this.state.headerType==='usualHeader'){
      return cls+'has-usual-header';
    }else if(this.state.headerType==='adminHeader'){
      return cls+'has-admin-header';
    }else{
      return cls;
    }
  }

  isHasFooter(){
    const cls = 'body-content-page  ';
    if(this.state.footerType==='simple'){
      return cls+'has-simple-footer';
    }else{
      return cls;
    }
  }

  onChangeHeaderType(type){
    if(this.state.headerType !== type){
      this.setState({
        headerType:type
      });      
    }
  }

  onChangeFooterType(type){
    if(this.state.footerType !== type){
      this.setState({
        footerType:type
      });      
    }
  }
  
}



export default App;
