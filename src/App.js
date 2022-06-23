import "./App.css";
import Todo from "./todo";

function App() {
  // const [input, setInput] = useState("");
  // // const [source, setSource] = useState("");
  // // const [destination, setDestination] = useState("");
  // const [sourceCode, setSourceCode] = useState("");
  // const [destcode, setDestCode] = useState("");
  // useEffect(() => {
  //   alanBtn({
  //     key: "859adf5ba32e4114bcc4cc11a505216a2e956eca572e1d8b807a3e2338fdd0dc/stage",
  //     onCommand: (commandData) => {
  //       console.log(commandData);
  //       if (commandData.command === "input") {
  //         setInput(commandData.data);
  //       }
  //       if (commandData.command === "source") {
  //         // setSource(commandData.data);
  //         if (commandData.data === "English") {
  //           setSourceCode("en");
  //         }
  //       }
  //       if (commandData.command === "destination") {
  //         // setDestination(commandData.data);
  //         if (commandData.data === "English") {
  //           setDestCode("en");
  //         }
  //         if (commandData.data === "Hindi") {
  //           setDestCode("hi");
  //         }
  //         if (commandData.data === "Spanish") {
  //           setDestCode("es");
  //         }
  //         if (commandData.data === "Spanish") {
  //           setDestCode("es");
  //         }
  //         if (commandData.data === "Chinese") {
  //           setDestCode("zh");
  //         }
  //         if (commandData.data === "Chinese") {
  //           setDestCode("zh");
  //         }
  //       }
  //     },
  //   });
  // }, []);
  // const translate = () => {
  //   let body = {
  //     q: input,
  //     source: sourceCode,
  //     target: destcode,
  //   };
  //   axios.post("https://libretraslate.de/translate", body).then((response) => {
  //     console.log(response);
  //   });
  // };

  return (
    <div className="App">
      {/* <h2>Hello World</h2> */}
      {/* <Translator /> */}
      <Todo />
      {/* <button onClick={translate}>Translate</button> */}
    </div>
  );
}

export default App;
