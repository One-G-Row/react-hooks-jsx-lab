import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
const headStyle = {
color: 'firebrick',
}
  return (
<div id="home">
<h1 style ={headStyle}>{name} is a Web Developer from {city}</h1>
</div>
  )
  ;
}

export default Home;
