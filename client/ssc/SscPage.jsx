import React from "react";
import QuestionCard from "../components/QuestionCard";

const myQuestion = {
  questionText: "What is 2 + 2?",
  options: ["3", "4", "5", "6"],
  correctAnswer: "4",
};
function SscPage() {
  return (
    <div>
      <QuestionCard questionData={myQuestion} />
    </div>
  );
}

export default SscPage;
