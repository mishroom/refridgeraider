import React from 'react';
import Search from './Search.jsx';
import NavBar from './NavBar.jsx';
import { Divider } from 'semantic-ui-react';

var Banner = (props) => (
<div>
  <NavBar onLogin={props.onLogin} onSignup={props.onSignup} />	
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