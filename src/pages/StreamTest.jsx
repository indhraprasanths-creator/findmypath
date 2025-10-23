import React, { useState } from 'react';

const questions = [
  {
    question: "Which subject do you like the most?",
    options: [
      { text: "Science (like Biology, Chemistry, Physics)", value: "A" },
      { text: "Math and Money (like Accounts, Economics)", value: "B" },
      { text: "Reading, Writing, and Art (like History, Literature, Painting)", value: "C" },
    ],
  },
  {
    question: "How do you like to solve problems?",
    options: [
      { text: "By doing experiments or using logic", value: "A" },
      { text: "By using numbers or working with money", value: "B" },
      { text: "By thinking of ideas or being creative", value: "C" },
    ],
  },
  {
    question: "What type of work sounds fun to you?",
    options: [
      { text: "Researching things or solving science problems", value: "A" },
      { text: "Managing money or learning about businesses", value: "B" },
      { text: "Writing stories or making art", value: "C" },
    ],
  },
  {
    question: "Which job would you like?",
    options: [
      { text: "Doctor, Engineer, Scientist, Computer Programmer", value: "A" },
      { text: "Banker, Business Owner, Accountant, Economist", value: "B" },
      { text: "Lawyer, Artist, Teacher, Designer", value: "C" },
    ],
  },
  {
    question: "How do you feel about math?",
    options: [
      { text: "I love math and solving problems", value: "A" },
      { text: "I like math when it is about money and business", value: "B" },
      { text: "I don’t like too much math", value: "C" },
    ],
  },
  {
    question: "Which subject do you like more?",
    options: [
      { text: "Science and experiments", value: "A" },
      { text: "Money, business, and numbers", value: "B" },
      { text: "Reading stories and being creative", value: "C" },
    ],
  },
  {
    question: "What do you like to do in your free time?",
    options: [
      { text: "Watching science videos or doing simple experiments", value: "A" },
      { text: "Reading about business or learning how money works", value: "B" },
      { text: "Reading books, drawing, or painting", value: "C" },
    ],
  },
  {
    question: "What’s important to you in the future?",
    options: [
      { text: "Working in medicine, technology, or science", value: "A" },
      { text: "Running a business or working with money", value: "B" },
      { text: "Creating art, teaching, or studying history", value: "C" },
    ],
  },
  {
    question: "How would you like to help the world?",
    options: [
      { text: "By solving problems in science or health", value: "A" },
      { text: "By running businesses or helping people manage money", value: "B" },
      { text: "By creating art, teaching, or helping others learn", value: "C" },
    ],
  },
  {
    question: "What do you like doing in school?",
    options: [
      { text: "Working on science experiments or solving problems", value: "A" },
      { text: "Working with numbers or studying business", value: "B" },
      { text: "Reading, writing stories, or drawing", value: "C" },
    ],
  },
  {
    question: "How do you like to learn?",
    options: [
      { text: "By doing experiments and seeing how things work", value: "A" },
      { text: "By using numbers and figuring out how things add up", value: "B" },
      { text: "By reading, talking about ideas, or making art", value: "C" },
    ],
  },
  {
    question: "What would you like to study after 10th?",
    options: [
      { text: "Engineering, Medicine, Computer Science, or Science", value: "A" },
      { text: "Business, Accounts, Economics, or Money", value: "B" },
      { text: "Law, Design, Art, or History", value: "C" },
    ],
  },
  {
    question: "How do you feel about tough problems?",
    options: [
      { text: "I like to figure out solutions with logic and experiments", value: "A" },
      { text: "I enjoy working with numbers or planning business ideas", value: "B" },
      { text: "I like solving problems by thinking creatively or making new things", value: "C" },
    ],
  },
  {
    question: "What sounds more fun to you?",
    options: [
      { text: "Working with science or technology", value: "A" },
      { text: "Managing a business or working with money", value: "B" },
      { text: "Doing something creative like writing or designing", value: "C" },
    ],
  }
];

const careerMap = {
  A: "Science 🧪",
  B: "Business 💼",
  C: "Arts and Creativity 🎨",
};

const CareerTest2 = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [result, setResult] = useState(null);
  const [scores, setScores] = useState(null);

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
    const count = { A: 0, B: 0, C: 0 };
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
              <h2 className="text-lg font-semibold mb-6">{currentQuestion + 1}. {questions[currentQuestion].question}</h2>
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
            </div>

            {/* {scores && (
              <div className="mt-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2 text-center">Your Scores:</h3>
                <ul className="text-lg space-y-1 text-blue-700 text-center">
                  <li>Science (A): {scores.A}</li>
                  <li>Business (B): {scores.B}</li>
                  <li>Arts and Creativity (C): {scores.C}</li>
                </ul>
              </div>
            )} */}
          </>
        )}
      </div>
    </div>
  );
};

export default CareerTest2;