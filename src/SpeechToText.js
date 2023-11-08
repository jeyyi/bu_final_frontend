import React, { useState, useEffect } from "react";

function SpeechToText() {
  const [isRecording, setIsRecording] = useState();
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000); //set timer every second
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      setTimer(0); //reset timer when stopped recording
    }
  };

  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <>
      <div className="w-full h-fit flex flex-col items-center">
        <h2 className="text-2xl">Speech to Text API testing</h2>
        <p className="text-sm font-thin text-center">
          Press the microphone to test the API.{" "}
          <span className="font-semibold">Note:</span>API is capable of english
          only as of now
        </p>
        <div className="h-56 w-56 mt-10 rounded-full cursor-pointer border border-gray-300 flex justify-center items-center" onClick={toggleRecording}>
          {isRecording ? (
            //stop icon svg
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 mx-auto text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 mx-auto text-gray-400"
            >
              <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
              <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}

export default SpeechToText;
