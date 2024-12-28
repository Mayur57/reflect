"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { questions } from "@/lib/questions";
import { VideoBackground } from "./VideoBackground";
import { QuestionScreen } from "./QuestionScreen";
import { WelcomeScreen } from "./WelcomeScreen";
import { ThankYouScreen } from "./ThankYouScreen";
import Footer from "../footer";

export const QuestionnaireApp = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [answer, setAnswer] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem("questionnaireProgress");
    if (savedProgress) {
      const { answers: savedAnswers, currentIndex } = JSON.parse(savedProgress);
      setAnswers(savedAnswers);
      setCurrentQuestionIndex(currentIndex);
      setAnswer(savedAnswers[currentIndex] || "");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "questionnaireProgress",
      JSON.stringify({
        answers,
        currentIndex: currentQuestionIndex,
      })
    );
  }, [answers, currentQuestionIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFadeOut(true);

    setTimeout(() => {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: answer,
      }));
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswer(answers[currentQuestionIndex + 1] || "");
      setFadeOut(false);
    }, 500);
  };

  const handleNavigate = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: answer,
      }));
      setCurrentQuestionIndex(index);
      setAnswer(answers[index] || "");
    }
  };

  const alignment = started ? "justify-center" : "justify-start";

  return (
    <>
      <main className={`min-h-screen flex items-center ${alignment} relative`}>
        <VideoBackground />

        <AnimatePresence mode="wait">
          {!started ? (
            <WelcomeScreen onStart={() => setStarted(true)} />
          ) : currentQuestionIndex >= questions.length ? (
            <ThankYouScreen answers={answer} />
          ) : (
            <QuestionScreen
              questionIndex={currentQuestionIndex}
              question={questions[currentQuestionIndex]}
              answer={answer}
              totalQuestions={questions.length}
              onAnswerChange={setAnswer}
              onSubmit={handleSubmit}
              onNavigate={handleNavigate}
              fadeOut={fadeOut}
            />
          )}
        </AnimatePresence>
      </main>
      {started && <Footer />}
    </>
  );
};
