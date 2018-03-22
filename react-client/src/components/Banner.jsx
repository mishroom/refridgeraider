import React from 'react';
import Search from './Search.jsx';

var Banner = (props) => (

  <div className="title">
  	<h1>
  	RefridgeRaider
  	</h1>
  	<Search className="search" onSearch={props.onSearch}/>
  </div>
)

  export default Banner;