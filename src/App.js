import { Fragment, useEffect, useRef, useState } from "react";
import "./styles.css";

function ClickGame() {
  const [clickCount, setClickCount] = useState(0);
  const [countDown, setCountDown] = useState(10);

  const countDownRef = useRef(null);
  const timeoutRef = useRef(null)

  const handleClick = () => {
    setClickCount(c => c + 1)
  }

  useEffect(() => {
    countDownRef.current = setInterval(() => {
      setCountDown(prev => prev - 1)
    },1000)

    timeoutRef.current = setTimeout(() => {
      clearInterval(countDownRef.current)
    },10000)
  },[])

  return (
    <Fragment>
      <h1>{`Clicks : ${clickCount}`}</h1>
      <h1>{`Timer : ${countDown}`}</h1>
      {countDown === 0 ? '' : <button onClick={handleClick}>Click</button>}
      
    </Fragment>
  )

}


export default function App() {
  return (
    <div className="App">
      <ClickGame/>
    </div>
  );
}
