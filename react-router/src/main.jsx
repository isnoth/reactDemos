import React from 'react'
import ReactDOM  from 'react-dom'
import Banner from '/src/components/banner.jsx!'
import { Router, Route, Link } from 'react-router'

class Home extends React.Component {
  render(){
    return <p> HOME</p>
  }
}
class About extends React.Component {
  render(){
    return <p> About</p>
  }
}
class Inbox extends React.Component {
  render(){
    return <p> Inbox</p>
  }
}

class App extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      route: window.location.hash.substr(1)
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render() {

    return (
      <div>
        <Banner/>
		
        <h1>App</h1>
        {/*
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        */}
				{this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById('content'))


