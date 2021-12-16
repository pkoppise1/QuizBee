import React from 'react';
import qBank from '../../quizService';
import Question from '../Question/Question';
import Result from '../Result/Result';
export default class QuestionList extends React.Component {
    state={
        Questions:[],
        score:0,
        responses:0
    };

     getQuestion=() => {
         qBank().then(x=>{
             console.log(x);
             this.setState({
             Questions:x
         });
        
    });
     };
    componentDidMount(){
        this.getQuestion();
    }
    computedAnswer=(ans,crct)=>{
        if(ans===crct)
        {
            this.setState({score:this.state.score+1}); 
        }
        this.setState({responses:this.state.responses+1<5?this.state.responses+1:5});
        console.log(this.state.responses);
    }
    playAgain=()=>{
        
        this.getQuestion();
        this.setState({score:0, responses:0});

    };
    render() { 
    
        return <div>
            <div>
            {this.state.Questions.length>0&&
            this.state.responses<5&&
            this.state.Questions.map(
                ({question, answers, correct, questionId})=>(<Question question={question} options={answers} key={questionId} selected={ans=>this.computedAnswer(ans,correct)}></Question>
           ))}
            {this.state.responses===5?<Result score={this.state.score} playAgain={this.playAgain}></Result>:null}
            </div>
        </div>;
    }
}
 
