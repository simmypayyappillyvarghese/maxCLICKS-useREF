import "./styles.css";
import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer((time) => (time > 0 ? (time -= 1) : 0));
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      clearInterval(interval.current);
    }
  }, [timer]);

  return (
    <div className="App">
      <h6>No Of Clicks until timer expires</h6>
      <div className="bg-info">
        {timer > 0 ? (
          <>
            <h4>{counter}</h4>
            <p>Time Left : {timer} seconds</p>
            <button
              onClick={() => {
                setCounter((count) => {
                  if (count !== 11) {
                    count++;
                  }
                  return count;
                });
              }}
            >
              +
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
