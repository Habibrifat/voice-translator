import { useLayoutEffect, useState } from "react";
import Translator from "./components/Translator";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

const Todo = () => {
  const [input, setInput] = useState("");
  // const [source, setSource] = useState("");
  // const [destination, setDestination] = useState("");
  const [sourceCode, setSourceCode] = useState("");
  const [destcode, setDestCode] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("");

  useLayoutEffect(() => {
    function updateScreen(time) {
      alanBtn({
        key: "859adf5ba32e4114bcc4cc11a505216a2e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
          console.log(commandData);
          if (commandData.command === "input") {
            setInput(commandData.data);
          }
          if (commandData.command === "source") {
            // setSource(commandData.data);
            if (commandData.data === "English") {
              setSourceCode("en");
            }
          }
          if (commandData.command === "destination") {
            // setDestination(commandData.data);
            if (commandData.data === "English") {
              setLanguage(commandData.data);
              setDestCode("en");
            }
            if (commandData.data === "Arabic") {
              setLanguage(commandData.data);
              setDestCode("ar");
            }
            if (commandData.data === "Spanish") {
              setLanguage(commandData.data);
              setDestCode("es");
            }
            if (commandData.data === "German") {
              setLanguage(commandData.data);
              setDestCode("de");
            }
            if (commandData.data === "Chinese") {
              setLanguage(commandData.data);
              setDestCode("zh");
            }
            if (commandData.data === "Chinese") {
              setLanguage(commandData.data);
              setDestCode("zh");
            }
            if (commandData.data === "Italian") {
              setLanguage(commandData.data);
              setDestCode("it");
            }
            if (commandData.data === "Japanese") {
              setLanguage(commandData.data);
              setDestCode("ja");
            }
            if (commandData.data === "Korean") {
              setLanguage(commandData.data);
              setDestCode("ko");
            }
            if (commandData.data === "Russian") {
              setLanguage(commandData.data);
              setDestCode("ru");
            }
            if (commandData.data === "Swedish") {
              setLanguage(commandData.data);
              setDestCode("sv");
            }
            if (commandData.data === "Turkish") {
              setLanguage(commandData.data);
              setDestCode("tr");
            }
            if (commandData.data === "Hindi") {
              setLanguage(commandData.data);
              setDestCode("hi");
            }
          }
        },
      });
    }
    requestAnimationFrame(updateScreen);
  }, []);

  useLayoutEffect(() => {
    translate();
  }, [input, sourceCode, destcode,translate]);

  const translate = () => {
    let body = {
      q: input,
      source: sourceCode,
      target: destcode,
    };
    axios
      .post(`https://libretranslate.de/translate`, body)
      .then((response) => {
        setTranslatedText(response.data.translatedText);
        console.log(response.data.translatedText);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="todo">
      <h2>Hello World</h2>
      <Translator
        translatedText={translatedText}
        input={input}
        language={language}
      />
      {/* <button onClick={translate}>Translate</button> */}
    </div>
  );
};

export default Todo;
