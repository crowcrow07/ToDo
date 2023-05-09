import { useState } from "react";
import tw from "tailwind-styled-components";

export default function InputSide(props) {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-1/2 p-10 flex">
      <div className="flex flex-col items-center bg-stone-300 h-full">
        <Input value={props.inputValue} onChange={inputHandler} />
        <Button
          onClick={() => {
            props.buttonHandler(inputValue);
          }}
        >
          등록
        </Button>
      </div>
    </div>
  );
}

const Input = tw.input`
w-5/6
h-20 
text-4xl
bg-stone-300
border-black
border
m-4
`;

const Button = tw.button`
flex bg-stone-300 border-black border w-10 justify-center items-center
`;
