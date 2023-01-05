import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    if (counter < MAXIMUM_COUNT) return;
    console.log('%cMaximum value reached', 'color: red; background-color: black;');
    gsap
      .to('h2', { y: -10, duration: 0.2, ease: 'ease.out' })
      .then(() => gsap.to('h2', { y: 0, duration: 1, ease: 'bounce.out' }));
  }, [counter]);

  const addClickHandle = () => {
    setCounter((count) => Math.min(count + 1, MAXIMUM_COUNT));
  };

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2>{counter}</h2>
      <button type='button' onClick={addClickHandle}>
        +1
      </button>
    </>
  );
};
