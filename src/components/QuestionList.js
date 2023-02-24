import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
 const [questions, setQuestions] = useState([]);

 useEffect(() => {
  fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((questions) => setQuestions(questions))
 }, []);

 function onDeleteQuestion(deletedQuestion) {
  const revisedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
  setQuestions(revisedQuestions);
 }

 function onUpdateQuestion(updatedQuestion) {
  const updatedQuestions = questions.map((question) => {
    if (question.id === updatedQuestion.id) {
      return updatedQuestion;
    } else {
      return question;
    }
  });
  setQuestions(updatedQuestions);
}

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
          <QuestionItem 
            question={question} 
            key={question.id} 
            onDeleteQuestion={onDeleteQuestion} 
            onUpdateQuestion={onUpdateQuestion}/>
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
