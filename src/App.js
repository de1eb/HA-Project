import React from 'react';
import ToDo from './ToDo.js'
import Home from './Home.js'
import PersonalPage from './PersonalPage.js';
import { Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userSelected: ''
    }
    this.handleUserSelect = this.handleUserSelect.bind(this);
  }
  
  componentDidMount() {
    let thisApp = this;
    let url = 'https://koreanjson.com/users';
    fetch(url).then(res => res.json()).then(jsoned => thisApp.setState({
      users: jsoned
    })).catch(err => console.log(err))
  }

  handleUserSelect(event) {
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/todo" render={(props) => <ToDo users={this.state.users}/>} />
        <Route path="/personal_page" component={PersonalPage} />

      </div>
    )
  }
}

export default App;
