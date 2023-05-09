import "./App.css";
import ListSide from "./component/ListSide";
import Nav from "./component/Nav";
import InputSide from "./component/InputSide";
import data from "./data/data";
import { useState } from "react";

function App() {
  const [dataes, setDataes] = useState(data);

  const buttonHandler = (inputStr) => {
    setDataes([
      ...dataes,
      { id: dataes.length + 1, text: inputStr, checked: false },
    ]);
  };

  return (
    <div className="App flex flex-col">
      <div className="flex justify-center">
        <Nav />
      </div>
      <div className="h-12" />
      <div className="flex flex-row h-128 p-8">
        <ListSide dataes={dataes} setDataes={setDataes} />
        <InputSide buttonHandler={buttonHandler} />
      </div>
    </div>
  );
}

export default App;
