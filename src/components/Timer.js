import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0); // thời gian tính bằng giây
  const [isActive, setIsActive] = useState(false); // trạng thái chạy / dừng

  // Xử lý interval
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    // Cleanup khi component unmount hoặc khi isActive thay đổi
    return () => clearInterval(interval);
  }, [isActive]);

  // Hàm định dạng MM:SS
  const formatTime = (secs) => {
    const minutes = String(Math.floor(secs / 60)).padStart(2, '0');
    const sec = String(secs % 60).padStart(2, '0');
    return `${minutes}:${sec}`;
  };

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  // Style cơ bản
  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px'
  };

  const timeStyle = {
    fontSize: '48px',
    marginBottom: '20px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h2>Timer / Stopwatch</h2>
      <div style={timeStyle}>{formatTime(seconds)}</div>
      <div>
        <button
          style={{ ...buttonStyle, backgroundColor: '#4CAF50', color: 'white' }}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: '#f0ad4e', color: 'white' }}
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: '#d9534f', color: 'white' }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
