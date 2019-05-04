import React from 'react';

const Home = () => (
  <div>
    <div className="center-container">
      <div>
        <span className="timer-number">00</span>
        <span className="timer-semicolon">:</span>
        <span className="timer-number">00</span>
        <span className="timer-semicolon">:</span>
        <span className="timer-number">00</span>
      </div>
      <div className="timer-button-container">
        <button className="timer-button" type="button" name="button">
          START
        </button>
        <button className="timer-button" type="button" name="button">
          STOP
        </button>
        <button className="timer-button" type="button" name="button">
          RESET
        </button>
      </div>
    </div>

    <style jsx>{`
      body {
        margin: 0;
        background-color: black;
      }

      .center-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .inline-block {
        display: inline-block;
      }

      .text-center {
        text-align: center;
      }

      .timer-number,
      .timer-semicolon {
        color: black;
        font-size: 15vw;
      }

      .timer-button-container {
        width: 50vw;
        display: flex;
        justify-content: space-around;
      }

      .timer-button {
        font-size: 50px;
      }
    `}</style>
  </div>
);

export default Home;
