"use client";
import React, { useState } from "react";
import { quiz } from "../../data.js";

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
  });
  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const onAnswerSelected = (answer, index) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            incorrectAnswers: prev.incorrectAnswers + 1,
          }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="text-white max-w-[740px] w-[100%] m-auto p-4">
      <h1 className="text-3xl font-bold ">Quiz Page</h1>
      <div>
        <h2 className="text-lg font-semibold">
          Question:{activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="bg-[#f8f8f8] p-4 mt-8 rounded-[4px] text-black ">
            <h3 className="text-xl font-bold">{question}</h3>
            {answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => onAnswerSelected(answer, index)}
                className={`${
                  selectedAnswerIndex === index
                    ? "bg-[#000925] text-white list-none cursor-pointer my-2 py-4 px-2"
                    : "hover:bg-[#d8d8d8] list-none cursor-pointer my-2  text-[#000105] border border-[lightgray] py-4 px-2 "
                }`}
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <div>
                <button
                  onClick={nextQuestion}
                  className="py-4 px-2 w-full mt-3 rounded-[4px] cursor-pointer bg-[#808080] text-[#f8f8f8]"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            ) : (
              <div>
                <button
                  disabled
                  className="py-4 px-2 w-full mt-3 cursor-not-allowed rounded-[4px] bg-gray-200 text-[#f8f8f8]"
                ></button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-[#f8f8f8] p-4 mt-8 rounded-[4px] text-black flex flex-col space-y-2">
            <h3
              className="text-3xl font-bold
            "
            >
              Results
            </h3>
            <h3 className="font-bold text-3xl">{(result.score / 25) * 100}%</h3>
            <p>
              Total Questions: <span> {questions.length}</span>
            </p>
            <p>
              Total Score: <span> {result.score}</span>
            </p>
            <p>
              Correct Answer: <span> {result.correctAnswers}</span>
            </p>
            <p>
              Incorrect Answer: <span> {result.incorrectAnswers}</span>
            </p>
            <button
              className="py-4 px-2 w-full mt-3 rounded-[4px] cursor-pointer bg-[#808080] text-[#f8f8f8]"
              onClick={() => window.location.reload()}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
