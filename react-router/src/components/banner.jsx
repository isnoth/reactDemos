import React from 'react'
import ReactDOM  from 'react-dom'
import { Router, Route, Link } from 'react-router'


class Banner extends React.Component {
  render(){
    return (
      <div>
        <p> hello this is banner</p>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
      </div>
    )
  }
}
export default Banner;
