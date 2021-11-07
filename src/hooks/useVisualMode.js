import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    if(replace) {
      const historyCopy = [...history];
      historyCopy.splice([historyCopy.length - 1], 1, mode);
      setHistory([...historyCopy]);
      return setMode(mode) 
    }
      setHistory(prev => [...prev, mode])
      return setMode(mode) 
    }
  const back = () => {
    if(history.length <= 1) {
      return mode
    } 
      const historyCopy = [...history];
      historyCopy.pop();
      setHistory(historyCopy);
      return setMode(historyCopy[historyCopy.length - 1])
  }
    return { mode, transition, back };
}
