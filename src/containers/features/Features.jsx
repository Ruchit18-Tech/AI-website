import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Immediately reducing end doubt",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    title: "congue eu consequat ac",
    text: "consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis.",
  },
  {
    title: "nibh sed pulvinar proin",
    text: "porta non pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam non nisi est sit amet.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        Just realize that the future is already here. Step into the future right
        now.
      </h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
