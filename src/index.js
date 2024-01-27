import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="Profile\image.jpg" alt="my-imag" className="Image"></img>;
}
function Intro() {
  return (
    <div className="intro">
      <h1>Vivek Kumar</h1>
      <h3>
        Hii, there I am a 🤑 Full-stack Web developer 🤑 with the hands-on
        working knowledge on Java full stack. When i am not studying i like to
        either watch anime or like to play online games with my friends.
      </h3>
    </div>
  );
}

function SkillList() {
  return (
    <div className="Skill">
      <Skill name="Html 👍" />
      <Skill name="Jsp ✌️" />
      <Skill name="Css 👍" />
      <Skill name="Tailwind 🤗" />
      <Skill name="JavaScript 🫰" />
      <Skill name="React 🫰" />
      <Skill name="Java 🫰" />
      <Skill name="Maven 😏" />
      <Skill name="Servlet 🔎" />
      <Skill name="Hibernate 👍" />
      <Skill name="Spring Boot 🤯" />
      <Skill name="SQL ✌️" />
      <Skill name="HQL 🫠" />
      <Skill name="Oracle 🙋‍♂️" />
      <Skill name="Git & GitHub 👍" />
    </div>
  );
}
function Skill(props) {
  return <div className="skils">{props.name}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
