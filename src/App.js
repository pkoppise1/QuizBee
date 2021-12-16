import React from "react";
import './App.css';
import QuestionList from "./Components/QuestionList/QuestionList";
class App extends React.Component {
  render() { 
    return <div className="component">
      <div className="Title">Quiz Bee</div>
      <QuestionList></QuestionList>
    </div>;
  }
}
 


export default App;