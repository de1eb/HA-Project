import React from 'react';
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      어플리케이션을 골라주세요
      <ul>
        <li><Link to="/todo" >투 두</Link></li>
        <li><Link to="/board">게시판</Link></li>
      </ul>
    </div >
  );
}

export default Home;