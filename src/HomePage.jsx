import React from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "./navbar/NavBar";
import Modal from "./Auth/AuthModal";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { useState } from "react";

const instructionSteps = [
  {
    step: 1,
    title: "Start Game",
    description: "Sign in and click 'Play'. You will get a word to draw.",
  },
  {
    step: 2,
    title: "Draw",
    description:
      "Use your mouse to draw your word and submit before time runs out!",
  },
  {
    step: 3,
    title: "AI Guesses",
    description:
      "AI will try to guess your drawing! Let's see if you can make it understand!",
  },
];

const InstructionCard = ({ step, title, description }) => (
  <div className="instructionCard">
    <h3 className="font-bold mb-2 text-eerie-black">
      {step}. {title}
    </h3>
    <p className="text-eerie-black">{description}</p>
  </div>
);

const HomePage = () => {
  // const navigate = useNavigate();

  // const handleStartGame = () => {
  //   navigate("/login");
  // };
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // To toggle between Login and Register

  // Function to handle modal open/close
  const toggleModal = () => setShowModal(!showModal);

  // Function to toggle between Login and Register form
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <>
      <Navbar
        containerClassName="bg-atomic-tangerine-500 text-white py-1 "
        brandName="whataduudle Game"
      />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-vanilla-500">
        <div className="w-full max-w-4xl retroContainer">
          <div className="retroHeader">
            <h2 className="text-lg font-bold">How To Play</h2>
          </div>

          <div className="bg-white p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {instructionSteps.map(({ step, title, description }) => (
                <InstructionCard
                  key={step}
                  step={step}
                  title={title}
                  description={description}
                />
              ))}
            </div>

            <div className="flex justify-center">
              <button onClick={toggleModal} className="retroButton">
                Sign-in to Play
              </button>
              {/* Modal Component */}
              <Modal
                showModal={showModal}
                onClose={toggleModal}
                // Pass Login or Register form based on isLogin state
                LoginComponent={<Login />}
                RegisterComponent={<Register />}
              />
              {/* Toggle between Login and Register */}
              <button
                onClick={toggleForm}
                className="text-eerie-black-600 hover:text-indian-red"
              >
                {/* {isLogin
                  ? "Need an account? Register"
                  : "Already have an account? Login"} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
