import QuestionItem from "./QuestionItem.js";

function QuestionList({ questions, handleDelete }) {

  const currentList = questions.map(question => {
    return <QuestionItem key={question.id} question={question} handleDelete/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{currentList}</ul>
    </section>
  );
}

export default QuestionList;
