import "./translator.css";
const Translator = ({ translatedText, input, language }) => {
  return (
    <div className="translated_body">
      <h2>Voice Translator</h2>
      <h4>Press the MicroPhone Button and say.....</h4>
      <h4>Translate Your Text from Source to Destination</h4>
      {input ? <h3>INPUT: {input}</h3> : <></>}
      {language ? <h3>language: {language}</h3> : <></>}
      {translatedText ? <h3>OUTPUT: {translatedText}</h3> : <></>}
    </div>
  );
};

export default Translator;
