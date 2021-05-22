import React from "react";

export default function FirstBlock() {
  return (
    <div
      className={
        "flex flex-col py-52 h-1/3 bg-purple-800  space-y-5   px-10 lg:px-40   w-full"
      }
    >
      <span
        className={
          "text-3xl max-w-sm lg:max-w-md text-gray-200 font-robotocondensed tracking-wide"
        }
      >
        Share Your Dream Project With Us. We Will Make It Comes True
      </span>
      <button
        className={
          "group w-32 flex h-8   border rounded-none hover:border-none hover:shadow-xl border-gray-300 overflow-hidden relative  py-1.5"
        }
      >
        <div
          className={
            "absolute top-0 left-0 right-0 bottom-0 transition-all transform w-0  group-hover:w-32 bg-black"
          }
        ></div>
        <div
          className={
            "text-sm tracking-wider font-medium absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-200"
          }
        >
          LEARN MORE
        </div>
      </button>
    </div>
  );
}
