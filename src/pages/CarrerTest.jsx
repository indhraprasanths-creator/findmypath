import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import Navbar from '../components/Navbar';

const questions = [
  {
    question: "When you have free time, you like to:",
    options: [
      { text: "Build something or fix gadgets", value: "A" },
      { text: "Write stories or talk about events", value: "B" },
      { text: "Watch science experiments or discovery shows", value: "C" },
      { text: "Talk about rules, laws, or rights", value: "D" },
      { text: "Draw, paint, or create something colorful", value: "E" },
    ],
  },
  {
    question: "Which school subject do you enjoy the most?",
    options: [
      { text: "Mathematics", value: "A" },
      { text: "English or Language", value: "B" },
      { text: "Science (Biology / Physics / Chemistry)", value: "C" },
      { text: "History or Social Science", value: "D" },
      { text: "Art or Computer Drawing", value: "E" },
    ],
  },
  {
    question: "How do you like to solve a problem?",
    options: [
      { text: "Find a smart and technical solution", value: "A" },
      { text: "Explain the problem with a good story", value: "B" },
      { text: "Find out what caused it and fix it step-by-step", value: "C" },
      { text: "Think if it is fair and correct for everyone", value: "D" },
      { text: "Think about making it look better or different", value: "E" },
    ],
  },
  {
    question: "If you win a school competition, what would it be for?",
    options: [
      { text: "Science or Robotics Fair", value: "A" },
      { text: "Speech, Essay, or Writing Contest", value: "B" },
      { text: "Science Model or Project", value: "C" },
      { text: "Debate or Quiz Competition", value: "D" },
      { text: "Poster-making or Art Competition", value: "E" },
    ],
  },
  {
    question: "What do you think is the most exciting thing?",
    options: [
      { text: "Discovering new technology", value: "A" },
      { text: "Sharing stories that inspire people", value: "B" },
      { text: "Finding how living things work", value: "C" },
      { text: "Helping people fight for their rights", value: "D" },
      { text: "Creating a new design for something", value: "E" },
    ],
  },
  {
    question: "Imagine your dream project at school. What is it?",
    options: [
      { text: "Make a robot that helps in daily life", value: "A" },
      { text: "Start a school magazine with fun stories", value: "B" },
      { text: "Find a way to save plants or animals", value: "C" },
      { text: "Set rules that make school better for students", value: "D" },
      { text: "Create a colorful app or game design", value: "E" },
    ],
  },
  {
    question: "In a group of friends, you are usually:",
    options: [
      { text: "The one who gives practical solutions", value: "A" },
      { text: "The one who tells stories or jokes", value: "B" },
      { text: "The one who asks 'Why?' and 'How?' questions", value: "C" },
      { text: "The one who discusses rules or fairness", value: "D" },
      { text: "The one who draws, organizes, and makes things look better", value: "E" },
    ],
  },
  {
    question: "Which one sounds most interesting to you?",
    options: [
      { text: "Build a small bridge using sticks", value: "A" },
      { text: "Write a poem about your best friend", value: "B" },
      { text: "Make a simple water filter at home", value: "C" },
      { text: "Speak about 'Justice for all' in front of your class", value: "D" },
      { text: "Design a colorful poster for 'Save Trees'", value: "E" },
    ],
  },
  {
    question: "When you read news, what catches your attention?",
    options: [
      { text: "New inventions like electric cars", value: "A" },
      { text: "Famous speeches and interviews", value: "B" },
      { text: "New medicines, vaccines, or science news", value: "C" },
      { text: "Important rules or government decisions", value: "D" },
      { text: "New gadgets, logos, fashion, and designs", value: "E" },
    ],
  },
  {
    question: "If you could meet a famous person, you would pick:",
    options: [
      { text: "A famous engineer or inventor", value: "A" },
      { text: "A famous author or journalist", value: "B" },
      { text: "A famous doctor or scientist", value: "C" },
      { text: "A famous leader or judge", value: "D" },
      { text: "A famous designer or artist", value: "E" },
    ],
  },
];

const careerMap = {
  A: "Engineering and Technology",
  B: "Journalism and Media",
  C: "Medicine and Science",
  D: "Law and Government",
  E: "Design and Creativity",
};

const CareerTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [result, setResult] = useState(null);
  const [scores, setScores] = useState(null);
  const navigate = useNavigate(); // Initialize navigation

  const handleOptionSelect = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = value;
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (finalAnswers) => {
    const count = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    finalAnswers.forEach((answer) => {
      if (answer) {
        count[answer]++;
      }
    });

    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    const top = sorted[0];
    const second = sorted[1];

    if (top[1] === second[1] && top[1] !== 0) {
      setResult(`You are suited for: ${careerMap[top[0]]} and ${careerMap[second[0]]}`);
    } else if (top[1] !== 0) {
      setResult(`You are suited for: ${careerMap[top[0]]}`);
    } else {
      setResult("Please answer all questions!");
    }

    setScores(count);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">
        {!result ? (
          <>
            <h1 className="text-2xl font-bold mb-4 text-center">Career Interest Test</h1>
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-6">
                {currentQuestion + 1}. {questions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(option.value)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg text-left"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              {currentQuestion > 0 && (
                <button
                  onClick={goToPreviousQuestion}
                  className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                >
                  Back
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Result</h2>
              <p className="text-lg font-semibold">{result}</p>
              {/* {scores && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Your Scores:</h3>
                  <ul className="text-lg space-y-1 text-blue-700">
                    <li>Engineering and Technology (A): {scores.A}</li>
                    <li>Journalism and Media (B): {scores.B}</li>
                    <li>Medicine and Science (C): {scores.C}</li>
                    <li>Law and Government (D): {scores.D}</li>
                    <li>Design and Creativity (E): {scores.E}</li>
                  </ul>
                </div>
              )} */}
              <button
                onClick={() => navigate('/')} // Navigate to home
                className="mt-6 bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg"
              >
                Back to Home
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CareerTest;
