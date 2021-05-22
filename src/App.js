import { Fragment, useEffect, useRef, useState } from "react";
import "./styles.css";

function ClickGame() {
  const [count, setCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);


  const id = useRef()

  const clear = () => clearInterval(id.current)

  useEffect(() => {
    id.current = setInterval(() => {
      setTimeLeft(t => t - 1)
    }, 1000)

    return clear

  },[])

  useEffect(() => {
    if(timeLeft === 0) {
      clear()
    }
  },[timeLeft])

  // const countDownRef = useRef(null);
  // const timeoutRef = useRef(null)

  // const handleClick = () => {
  //   setClickCount(c => c + 1)
  // }

  // useEffect(() => {
  //   countDownRef.current = setInterval(() => {
  //     setCountDown(prev => prev - 1)
  //   },1000)

  //   timeoutRef.current = setTimeout(() => {
  //     clearInterval(countDownRef.current)
  //   },10000)
  // },[])

  return (
    <Fragment>
      <h1>{`Clicks : ${count}`}</h1>
      <h1>{`Timer : ${timeLeft}`}</h1>
      {timeLeft === 0 ? null : <button onClick={() => setCount(c => c + 1)}>Click</button>}
      
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
