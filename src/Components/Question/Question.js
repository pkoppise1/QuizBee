import React,{useState} from 'react'

const Question=({question,options,selected}) => {
    const[answers,setAnswer]=useState(options);
    
    console.log(answers);

   
    
   
    return (
        <div className='questionBox'>
            <div>{question}</div>
            <div>{answers.map((x,ind)=>(
                <button key={ind} onClick={()=>{
                    setAnswer([x])
                    selected([x])}}>{x}</button>
            ))}</div>
        </div>
    )
}

export default Question;