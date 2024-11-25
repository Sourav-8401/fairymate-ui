import React, { useState } from "react";
import questions from "../../assets/questions.json";
import { toast, ToastContainer } from "react-toastify";

export default function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionId, optionIndex) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const notifySubmit = () => {
    console.log("Selected items:", selectedOptions);
    toast("Test Submitted!");
  };

  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-500",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <div className="my-8 h-fit">
      {questions.map((question, index) => (
        <div key={question.id} className="my-10">
          <div className="my-5 text-lg">{`Q${index + 1}: ${question.question}`}</div>
          <ul>
            {question.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className={`p-3 px-6 rounded-2xl my-2 cursor-pointer ${
                  selectedOptions[question.id] === optionIndex
                    ? "bg-primary_hard"
                    : "bg-dark-400 hover:bg-primary_hard"
                }`}
                onClick={() => handleOptionSelect(question.id, optionIndex)}
              >
                {option.option}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex justify-end">
        <button
          className="bg-primary_hard px-9 py-3 rounded-2xl"
          onClick={notifySubmit}
        >
          Submit
        </button>
        <ToastContainer
          toastClassName={(context) =>
            contextClass[context?.type || "default"] +
            " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden font-semibold cursor-pointer m-2"
          }
          bodyClassName={() => "font-white  block p-3"}
          position="bottom-right"
          hideProgressBar
          autoClose={3000}
        />
      </div>
    </div>
  );
}
