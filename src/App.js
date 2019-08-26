import React from 'react';
import ToDo from './ToDo.js'
import PersonalPage from './PersonalPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainpage: true,
      toDo_On: false,
      board_On: false,
      personalPage: false,
      users: [],
      userSelected: ''
    }
    this.handleMainpage = this.handleMainpage(this);
    this.handleToDo = this.handleToDo.bind(this);
    this.handleBoard = this.handleBoard.bind(this);
    this.handleUserSelect = this.handleUserSelect.bind(this);
  }

  componentDidMount() {
    let thisApp = this;
    let url = 'https://koreanjson.com/users';
    fetch(url).then(res => res.json()).then(jsoned => thisApp.setState({
      users: jsoned
    })).catch(err => console.log(err))
  }

  componentDidUpdate(){
    this.render();
  }
  handlePersonalPage(event){
    this.setState({
      mainpage: false,
      toDo_On: false,
      board_On: false,
      personalPage: true,
      userSelected: event.target.key
    })
  }
  handleUserSelect(event){
  }

  handleMainpage(){
    this.setState({
      toDo_On: false,
      board_On: false,
      personalPage: false,
      mainpage: true,
    })
  }

  handleToDo() {
    this.setState({
      mainpage: false,
      board_On: false,
      personalPage: false,
      toDo_On: true,
    })
  }

  handleBoard(){
    this.setState({
      mainpage: false,
      toDo_On: false,
      personalPage: false,
      board_On: true
    })
  }

  render() {
    if (this.state.mainpage) {
      return (
        <div>
          어플리케이션을 골라주세요
          <div onClick={this.handleToDo}>투 두</div>
          <div onClick={this.handleBoard}>게시판</div>
        </div>
      );
    } else if (this.state.toDo_On) {
      return (
        <ToDo users={this.state.users} handleMainpage={this.handleMainpage} handlePersonalPage={this.handlePersonalPage}>투두</ToDo>
      )
    } else if(this.state.board_On){ // 게시판 선택됨
      return (
        <div>

        </div>
      )
    } else if(this.state.personalPage){
      return (
        <PersonalPage />
      )
    }
  }
}

export default App;
