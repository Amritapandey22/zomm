import styles from './quiz.css'
import {BrowserRouter} from 'react-router-dom'
import React from 'react';
import Header from './quizComp/header'
const QuizPage =()=>{
  return(
    <BrowserRouter>
    <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
       <Header/>
    </div>
    </BrowserRouter>
    
    
  )
}

export default QuizPage;