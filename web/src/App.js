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
    welcomeText1 = "I made this site because i  did not want to write on each social media my  description, also I made this site so that people know who i'm, what are my hobby  and what am i working  on "
  } else if (lang === "ru") {
    welcomeText1 = "Я сделал этот сайт, потому что не хотел писать в каждой социальной сети свое описание, также я сделал этот сайт чтобы люди знали кто я, какие  мои хобби и над чем я работаю."
  }
  function changeLang() {
    if (lang === "ru") {
      setLang("en");
    } else {
      setLang("ru");
  }
  let welcomeText2 = "";
  if (lang === "en") {
    welcomeText2 = "I'm " + age + " years old , my real name is Alex I'm programming developer at JavaScript. I love games like RPG and collect all kinds of gadgets like PI laptop and others CyberDeck technologies. In a future i want to make a full blog about my all CyberDeck construction :) "
  } else if (lang === "ru") {
    welcomeText2 = "Мне " + age + "  лет. Моё настоящее имя  Алекс. Я разработчик программного обеспечения . Я люблю игры жанра  RPG также я собираю всевозможные гаджеты, такие как  PI laptop и другие  техноголии CyberDeck. В будущем я хочу создать полноценный блог о всех моих конструкциях  CyberDeck:)"
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
}
