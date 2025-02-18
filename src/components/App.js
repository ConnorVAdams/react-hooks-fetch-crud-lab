import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(resp => resp.json())
    .then(data => setQuestions(data))
  }, [])

  const handleDelete = (id) => {
    const newQs = questions.filter(question => question.id !== id )
    setQuestions(newQs)
  }

  const handleSubmit = (newQ) => {
    setQuestions(updatedQs => [...updatedQs, newQ])
  }

  const handleUpdate = (updatedQ) => {
    const updatedQs = questions.map(question => {
      if (question.id === updatedQ.id) {
        return updatedQ
      } else {
        return question
      }
    })
    setQuestions(updatedQs)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmit={handleSubmit} /> : <QuestionList handleUpdate={handleUpdate} handleDelete={handleDelete} questions={questions} />}
    </main>
  );
}

export default App;
