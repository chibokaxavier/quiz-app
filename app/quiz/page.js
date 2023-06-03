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
            <h3 className="text-xl font-bold">
              {questions[activeQuestion].question}
            </h3>
            {answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => onAnswerSelected(answer, index)}
                className={`${
                  selectedAnswerIndex === index
                    ? "bg-[#000925] text-white"
                    : "hover:bg-[#d8d8d8] list-none cursor-pointer my-2  text-[#000105] border border-[lightgray] py-4 px-2 "
                }`}
              >
                <span>{answer}</span>
              </li>
            ))}
          </div>
        ) : (
          <div className="bg-[#f8f8f8] p-4 mt-8 rounded-[4px] text-black"></div>
        )}
      </div>
    </div>
  );
};

export default page;
