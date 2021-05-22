import React from "react";
import Link from "next/link";
import { dcdP } from "../../dcd";

export default function ThirdBlock() {
  return (
    <div
      className={
        "flex flex-col relative py-24 bg-green-800 px-10 lg:px-40  h-screen w-full"
      }
    >
      <img
        className={"absolute inset-0 h-full w-full object-cover opacity-30"}
        src={"/image/b2.webp"}
      />
      <div
        className={
          "absolute  object-cover inset-0 bg-gradient-to-br from-green-600  via-green-600 to-transparent opacity-70"
        }
      ></div>
      <div className={"flex flex-col z-10"}>
        <div className={"flex flex-col space-y-1"}>
          <span
            className={
              "text-3xl text-gray-200 font-robotocondensed tracking-wide"
            }
          >
            Migrate from Your Old Solutions.
          </span>
          <span
            className={
              "text-sm tracking-wider text-gray-100 w-80   transform -skew-x-6  "
            }
          >
            With cutting edge technolody we make everything reliable, fast,
            secure
          </span>
        </div>

        <button
          className={
            "group w-32 mt-28 flex h-8 flex-shrink-0   border rounded-none hover:border-none hover:shadow-xl border-gray-200 overflow-hidden relative  py-1.5"
          }
        >
          <div
            className={
              "absolute top-0 left-0 right-0 bottom-0 transition-all transform w-0  group-hover:w-32 bg-green-900"
            }
          ></div>
          <div
            className={
              "text-sm tracking-wider font-medium absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-200"
            }
          >
            ASK US
          </div>
        </button>
        <div className={"mt-5 space-y-4"}>
          <span className={"text-gray-200 text-sm tracking-widest"}>
            SOLUTIONS
          </span>
          <div className={"flex flex-col space-y-8"}>
            {dcdP.home.thirdBlock.map(({ des, link }) => (
              <SolutionS sDescription={des} demolink={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionS({ sDescription, demolink }) {
  return (
    <div className={"flex flex-col space-y-3"}>
      <span
        className={
          "text-gray-100 leading-5 tracking-wider font-robotocondensed w-72"
        }
      >
        {sDescription}
      </span>
      <span className={"text-xs tracking-wider text-gray-200"}>
        <Link href={demolink}>VIEW</Link>
      </span>
    </div>
  );
}
