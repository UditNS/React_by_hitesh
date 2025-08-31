// Generally hooks are functions so there is no need to use .jsx when we create a custom hook. Hooks start with word 'use' 
import { useEffect, useState } from "react";

// What does this hook does?
// This hook return some data. What data -> api call data
function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    // here data is variable while the setData is a function which changes the data throughout UI.

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    //  Why do I need useEffect instead of just calling fetch directly in my hook/function?
    /*
        1. React re-renders components many times (initial render + on state/prop updates).

        2. If you put fetch directly inside the hook/function body, it will run on every render → causing infinite API calls.

        //why i need useEffect.
        1. Runs only once when component mounts, and then again only if currency changes.
        2. Prevents infinite loops.
    */
    useEffect(()=> {
        fetch(url)
        .then((res) => (res.json()))
        .then((res) => setData(res[currency]))
        // why i use res[currency] instead of res.currency
        //Dot notation (res.currency) → property name must be a fixed literal key called "currency".
        // Bracket notation (res[currency]) → property name can be dynamic, i.e., the value stored in the variable currency.
    }, [currency])
    return data;
}

export default useCurrencyInfo;