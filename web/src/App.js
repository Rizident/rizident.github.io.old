import React from "react";
import logo from './RizidentMeme.png';
import './App.css';
import { useState } from "react";
import TopBar from "TopBar";

function App() {
  // JavaScript
  const [lang, setLang] = useState("ru");


  let year = new Date().getFullYear();;
  let welcomeText = "";
  let welcomeText1 = "";
  let age = year - 2007;
  if (lang === "ru") {
    welcomeText = "Привет, я Rizident!"
  } else if (lang === "en") {
    welcomeText = "Hi! I'm Rizdent!"
  }

  let LanguageChange = "";
  LanguageChange = "ru"
  if (lang === "ru") {
    LanguageChange = "ENG"
  } else if (lang === "en") {
    LanguageChange = "RUS"
  }

  if (lang === "en") {
    welcomeText1 = "I'm " + age + " years old and i do this site  to discuss with users about  games or  others areas of activity, such as programming"
  } else if (lang === "ru") {
    welcomeText1 = "Мне " + age + " лет и я создал это сайт чтобы рассуждать с  пользователями о играх или о других сферах деятельности, например програмирование"
  }
  function changeLang() {
    if (lang === "ru") {
      setLang("en");
    } else {
      setLang("ru");
    }
  }
  let welcomeText2 = "";
  if (lang === "en") {
    welcomeText2 = "In the future, I would like to make this site a full-fledged social network, but for now you can only write to me on Reddit or to Telegram itself, so that you can communicate with me on the topics of games and programming, but you can also talk on other topics :) "
  } else if (lang === "ru") {
    welcomeText2 = " Этот сайт в будущем я хотел бы сделать как полнаценyю соц сеть но пока  можете писать только мне в Reddit или в сам Телеграм чтоб пообщатся именно со мной на темы игр и програмирования, но можно будет пообщатся и на другие темы :)"
  }
  // HTML
  return (
    <div className="App">
      <header className="App-header">
      <TopBar></TopBar>
        <div className="App-lang">

          <button onClick={changeLang}>{LanguageChange}</button>
        </div >
        <div className="App-content">

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

          <div className="App-info">
            <p className="App-text">
              {welcomeText2}
            </p>
          </div>
          <div>
            <p>
            
            </p>
          </div>

        </div>
      </header>
    </div >
  );
}
export default App;
