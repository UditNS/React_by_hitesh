import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // ref Hook
  const passwordRef = useRef(null); // brackets ke andar -> default value

  // As we need to generate password after everytime there is any change the state variables. So, we need to call this method again and again

  // useCallback() ->It is a react hook that let you cache a function defination between re-renders
  // const cachedFn = useCallback(fn, dependencies)
  // dependencies (array) -> whenever there is any change in the dependencies then the function need to be executed.

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charactersAllowed) str += "!@#$%^&*~_";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
    console.log(pass);
  }, [length, numberAllowed, charactersAllowed, setPassword]);
  // why setPassword as dependencies -> because of optimization

  // now how we call this function -> directly
  // passwordGenerator()
  // ERROR -> Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  //So we can't call the function directly. Eventhough we can create a button and when the button click we can run this function.

  // But if i want to run this function whenever there is any change on dependencies then I need to use a hook called useEffect(it let you synchronise a component with an external system)

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);

  // Now the copy of password is remaining
  // clipboard pe copy isn't the difficult task, the difficult task is what to copy
  //there is another hook for this -> useRef(). As the input and button field are not related thats why we are using the useRef hook

  // copy function
  const copyPasswordToClipboard = useCallback(() => {
    //As I am working on core React thats why i can use window object but in nextjs server side rendering happens which means i can't use window object
    passwordRef.current?.select(); // gives the highlight on selected text
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="flex flex-col min-w-screen h-screen items-center justify-center text-white ">
      <div className="p-12 pt-8 bg-gradient-to-tl from-violet-500 to-fuchsia-600 rounded-3xl">
        <h1 className="text-center text-4xl pb-6 text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-indigo-500 font-bold">
          Password Generator
        </h1>
        <div className="flex">
          <input
            type="text"
            value={password}
            className="bg-black text-white w-full px-2 py-2 text-xl rounded-l-xl focus:outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="px-2 py-2 bg-amber-500 rounded-r-xl text-black font-semibold"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="bg-green-600sad pt-3 flex text-black font-semibold">
          <input
            type="range"
            name="Length"
            id="length"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="accent-amber-500"
          />
          <label className="pl-2 w-26" htmlFor="length">
            Length : {length}
          </label>

          <input
            type="checkbox"
            id="numberAllowed"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            className="accent-amber-500 "
          />
          <label htmlFor="numberAllowed" className="pl-1 pr-1.5">
            Numbers
          </label>
          <input
            type="checkbox"
            id="charactersAllowed"
            defaultChecked={charactersAllowed}
            onChange={() => {
              setCharactersAllowed((prev) => !prev);
            }}
            className="accent-amber-500"
          />
          <label htmlFor="charactersAllowed" className="pl-1 pr-2">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
