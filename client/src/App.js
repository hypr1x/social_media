import React, { useState, useEffect } from "react";
import "./App.css";

let i = 0;
const txt = "What's up John! How have you been? Its been a long time.";
const speed = 70;

export default function App() {
  const [message, setMessage] = useState("");
  const [start, setStart] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (i === txt.length) {
        setStart(true);
        setTimeout(() => {
          i = 0;
          setMessage("");
          setStart(false);
        }, 2900);
      }
      if (i < txt.length) {
        setMessage(message + txt.charAt(i));
        i++;
      }
    }, speed);
  }, [message]);

  return (
    <div>
      <div className="nav">
        <div className="left">
          <div className="logo">Oopr</div>
          <div className="home">Home</div>
          <div className="about">About</div>
          <div className="resources">Resorces</div>
        </div>
        <div className="right">
          <button className="cta2 nw">
            Login Now
            <svg
              className="arrow2 nw"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
            >
              <g fillRule="evenodd">
                <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
              </g>
            </svg>
          </button>
          <button className="cta">
            Sign Up
            <svg
              className="arrow"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              aria-hidden="true"
              color="white"
            >
              <g fillRule="evenodd">
                <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="bg"></div>
      <div className="wrap">
        <div className="cta-details">
          <h1 className="big">
            Make posts <br />
            and share <span className="grad">everywhere.</span>
          </h1>
          <p className="main">
            Use Oopr to share to the rest of the world. Stay in touch with all
            your friends and family.
          </p>
          <div className="grid">
            <button className="cta">
              Sign Up
              <svg
                className="arrow"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
                color="white"
              >
                <g fillRule="evenodd">
                  <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                </g>
              </svg>
            </button>
            <button className="cta2">
              Login
              <svg
                className="arrow2"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                aria-hidden="true"
                color="white"
              >
                <g fillRule="evenodd">
                  <path className="HoverArrow__tipPath" d="M1 1l4 4-4 4"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="phone">
          <div className="sep">
            <div className="pfpwrap">
              <div className="pfp">JD</div>
            </div>
            <p className="to">
              To <span className="at">John Doe</span>
            </p>
          </div>
          <div className={start ? "w" : ""} id="p">
            {message}
          </div>
          <div className="send">Send</div>
        </div>
      </div>
    </div>
  );
}
