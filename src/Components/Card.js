import React from "react";

const Card = () => {
  return (
    <div className="w-full h-72 bg-white rounded-3xl shadow-sm px-5 py-5">
      <div className="flex w-full justify-between">
        <div className="w-12 h-12 bg-orange-500 rounded-2xl flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mx-auto text-gray-100"
          >
            <path
              fillRule="evenodd"
              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-19 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h2 className="mt-20 text-xl font-medium">Survey on Progress</h2>
      <h2 className="mt-2 text-3xl font-semibold">
        3.279<span className="text-sm text-gray-400 font-light">answers/day</span>
      </h2>
      <progress className="progress w-full mt-7 progress-error" value="75" max="100"></progress>
      <h3 className="text-xs text-gray-400">75/100</h3>
    </div>
  );
};

export default Card;
