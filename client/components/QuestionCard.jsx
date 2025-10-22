import React, { useState } from "react";

function QuestionCard({ questionData }) {
  const { questionText, options, correctAnswer } = questionData;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleOptionClick = (option) => {
    if (selectedAnswer) {
      return;
    }
    setSelectedAnswer(option);
  };

  const getStyleForOption = (option) => {
    if (!selectedAnswer) {
      return {};
    }
    if (option === correctAnswer) {
      return { backgroundColor: "lightgreen" };
    }
    if (option === selectedAnswer && option !== correctAnswer) {
      return { backgroundColor: "salmon" };
    }
    return {};
  };

  return (
    <div style={{ border: "1px solid black", padding: "16px", margin: "10px" }}>
      <h3 style={{ margin: 0, marginBottom: "12px" }}>{questionText}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={selectedAnswer !== null}
            style={getStyleForOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
