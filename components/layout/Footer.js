import React from "react";
import { dcdP, ILinks } from "../../dcd";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <div>
        {/*  <span
          className={"text-2xl  tracking-wide font-semibold  text-gray-200"}
        >
          Dream InfoTech
        </span> */}
        <div className={"flex flex-col  lg:flex-row gap-8"}>
          <div className={"gap-2 "}>
            <span
              className={"text-gray-300 text-2xl tracking-wide font-semibold"}
            >
              Company
            </span>
            <div className={"flex mt-2 text-gray-400 space-y-1 flex-col"}>
              <Link href={ILinks.home}>Home</Link>
              <Link href={ILinks.about}>About Us</Link>
              <Link href={"/"}>Solutions</Link>
              <Link href={ILinks.blog}>Blog</Link>
            </div>
          </div>
          <div className={"gap-2  "}>
            <span
              className={"text-gray-300 text-2xl tracking-wide font-semibold"}
            >
              Contact Us
            </span>
            <div className={"flex mt-2 text-gray-400 space-y-2  flex-col"}>
              <span className={"flex gap-1 flex-wrap"}>
                Phone :
                <div className={"flex flex-col text-gray-200"}>
                  <span>{dcdP.footer.contact1}</span>
                  <span>{dcdP.footer.contact2}</span>
                </div>
              </span>
              <span className={"flex gap-1 flex-wrap"}>
                E-mail :
                <div className={"flex flex-col text-trueGray-200"}>
                  <a href={`mailto:${dcdP.footer.email}`}>
                    {dcdP.footer.email}
                  </a>
                </div>
              </span>
            </div>
          </div>
          <div className={"gap-2 md:w-1/3"}>
            <span
              className={"text-gray-300 text-2xl tracking-wide font-semibold"}
            >
              Meet
            </span>
            <div className={"flex mt-2 text-gray-400 space-y-2  flex-col"}>
              <form className={"flex flex-col"}>
                Send Us Your Thought.
                <div className={"flex flex-col gap-2 mt-2"}>
                  <div className={"flex gap-2"}>
                    <input
                      type="email"
                      required={true}
                      placeholder="Enter Your Email"
                      className={
                        "outline-none placeholder-gray-400 text-gray-100 px-2 py-2 flex-grow bg-gray-600 rounded-sm"
                      }
                    />
                    <button
                      type="submit"
                      className={
                        "outline-none focus:outline-none focus:bg-orange-700 hover:bg-orange-700 placeholder-gray-300 font-poppin  text-gray-100 px-2 py-2 w-24 bg-orange-600 rounded-sm"
                      }
                    >
                      Send
                    </button>
                  </div>
                  <textarea
                    type="text"
                    required={true}
                    placeholder="Write your thoughts and enquiry..."
                    className={
                      "outline-none px-2 py-1  font-robotocondensed text-gray-100 bg-gray-600 rounded-sm"
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
