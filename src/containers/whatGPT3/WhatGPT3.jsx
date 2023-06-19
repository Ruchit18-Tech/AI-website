import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wai">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is AI"
        text="AI stands for Artificial Intelligence. It refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. AI involves various techniques, including machine learning, natural language processing, computer vision, and problem-solving algorithms. The goal of AI is to enable machines to perform tasks that typically require human intelligence, such as recognizing patterns, understanding language, making decisions, and solving complex problems."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        Embracing AI: Shaping Future Innovations
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Computer Vision"
        text="Understand Computer Vision aims to replicate human vision capabilities by enabling machines to interpret and understand visual information from images or videos."
      />
      <Feature
        title="Machine Learning"
        text="Machine Learning is a branch of AI that focuses on enabling computers to learn and improve from experience without being explicitly programmed."
      />
      <Feature
        title="NLP"
        text="Bridging the Gap between Humans and Machines
        Natural Language Processing (NLP) is concerned with enabling computers to understand, interpret, and generate human language."
      />
    </div>
  </div>
);

export default WhatGPT3;
