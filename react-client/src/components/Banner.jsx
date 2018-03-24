import React from 'react';
import Search from './Search.jsx';
import NavBar from './NavBar.jsx';

var Banner = (props) => (
<div>
  <NavBar />	
  <div className="banner-content">
  	<span className="title">
  	RefridgeRaider
  	</span>
  	<br />
  	<Search className="search" onSearch={props.onSearch} />
  </div>
</div>  
);

export default Banner;