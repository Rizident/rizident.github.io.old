import React from "react";
import logo from './RizidentMeme.png';
import './App.css';
import { useState } from "react";

function App() {
  // JavaScript
  const [lang, setLang] = useState("ru");


  let year =  new Date().getFullYear();;
  let welcomeText = "";
  let welcomeText1 = "";
  let age = year-2007;
  if (lang === "ru") {
    welcomeText = "Привет, я Rizident"
  } else if (lang === "en") {
    welcomeText = "Hi! I'm Rizdent"
  }

  if (lang === "en") {
    welcomeText1 = "I'm " + age + "years old and i do this site  to discuss with users about  games or  others areas of activity, such as programming"
  } else if (lang === "ru") {
    welcomeText1 = "Мне "+ age + "лет и я создал это сайт чтобы рассуждать с  пользователями о играх или о других сферах деятельности, например програмирование"
  }
  function changeLang() {
    if (lang === "ru") {
      setLang("en");
    } else {
      setLang("ru");
    }
  }

  // HTML
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-text">
          {welcomeText}
        </p>
        <p className="App-text">
        {welcomeText1}
        </p>
        <a
          className="App-link"
          href="http://reddit.com/u/Rude-Collection-6351"
          target="_blank"
          rel="noopener noreferrer"
        >
           My Reddit
        </a>
        <a
          className="App-link"
          href="https://t.me/Leha_Rizident"
          target="_blank"
          rel="noopener noreferrer"
        >
            My Telegram
        </a>
        
        <button onClick={changeLang}>{lang}</button>
      </header>
    </div>
  );
}
export default App;
