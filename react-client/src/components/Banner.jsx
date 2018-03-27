import React from 'react';
import Search from './Search.jsx';
import Login from './NavBar.jsx';
import { Divider } from 'semantic-ui-react';

var Banner = (props) => (
<div>
  <Login onLogin={props.onLogin} onSignup={props.onSignup} user={props.user} showSaved={props.showSaved} onLogout={props.onLogout} />	
  <div className="banner-content">
  	<span className="title">
  	RefridgeRaider
  	</span>
  	<br />
  	<Search className="search" onSearch={props.onSearch} />
  </div>
  <Divider inverted />
</div>  
);

export default Banner;