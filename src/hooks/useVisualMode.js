import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial)
  console.log("mode:", mode)

  const transition = () => {
    setMode(mode)
  }
  const back = () => {

  }
  return { mode, transition, back };
}