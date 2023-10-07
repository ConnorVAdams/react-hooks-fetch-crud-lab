import React from "react";

function QuestionItem({ question, handleDelete, handleUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const onDelete = (e) => {
    fetch(`http://localhost:4000/questions/${e.target.parentNode.id}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => handleDelete(parseInt(e.target.parentNode.id)))
  }

  const onUpdate = (e) => {
    fetch(`http://localhost:4000/questions/${e.target.parentNode.parentNode.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correctIndex: Number(e.target.value)
      })
    })
    .then(resp => resp.json())
    .then(updatedQ => handleUpdate(updatedQ))
  }

  return (
    <li id={id}>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={onUpdate} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;


