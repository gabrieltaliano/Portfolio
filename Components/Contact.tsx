import React, {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useRef,
} from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { event } from "../lib/analytics";
import AnimatedCorners from "./AnimatedCorners";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [result, setResult] = useState("");
  const form = useRef<any>();

  const sendEmailGA = (query: any) => {
    event({
      action: "send email",
      params: {
        form: query,
      },
    });
  };

  const sendEmail: FormEventHandler = (e) => {
    e.preventDefault();
    sendEmailGA(form.current);
    setDisabled(true);
    emailjs
      .sendForm(
        "service_uu1i4xr",
        "template_tcqbu84",
        form.current!,
        "m1D4NG-CkUupo6bdJ"
      )
      .then(
        () => {
          setDisabled(false);
          setResult("Email sent successfully!");
        },
        (error) => {
          setDisabled(false);
          setResult("Oops! Something went wrong. Please try again later.");
          console.log(error.text);
        }
      );
  };

  const handleFormView: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setOpen((x) => {
      event({
        action: "contact form triggered",
        params: {
          form: x ? "closed" : "opened",
        },
      });
      return false;
    });
  };

  return (
    <section
      className={`min-h-[20vh] flex items-center flex-col justify-center w-full`}
    >
      <form
        className={`border-[1px] border-green-900 duration-200 shadow shadow-green-900 my-8 px-4 py-2 overflow-hidden relative rounded-xl ${
          open
            ? `w-full max-w-[50rem] font-IBM-Plex-Mono text-green-500 my-8 pb-4 bg-black/20 rounded-xl py-2 px-4 flex flex-col lg:flex-row gap-x-8`
            : `w-min overflow-hidden flex justify-center items-center px-2shadow hover:scale-105 cursor-pointer`
        }`}
        ref={form}
        onClick={() => {
          setOpen(true);
        }}
        onSubmit={sendEmail}
      >
        {open ? (
          <>
            <button
              onClick={handleFormView}
              className="absolute z-50 right-4 top-2 rounded-full w-3 h-3 border-[1px] border-red-500 bg-red-600 "
            />
            <div
              className={`flex flex-col grow gap-4  ${
                open ? "opacity-100 duration-200 " : "opacity-0"
              }`}
            >
              <div className="flex flex-col">
                <label>Name</label>
                <input
                  required
                  className="bg-slate-300 text-gray-900"
                  type="name"
                  name="user_name"
                  onChange={() => {
                    setResult("");
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  required
                  className="bg-slate-300 text-gray-900"
                  type="email"
                  name="user_email"
                  onChange={() => {
                    setResult("");
                  }}
                />
              </div>
            </div>
            <div
              className={`flex flex-col grow-[3]  ${
                open ? "opacity-100 duration-200 " : "opacity-0"
              }`}
            >
              <label>Message</label>
              <textarea
                required
                className="bg-slate-300 text-gray-900 font-sans"
                name="message"
                onChange={() => {
                  setResult("");
                }}
              />
              <div className="flex">
                <div
                  className={`btn w-full shadow-lg my-4 mb-2 ${
                    disabled ? "shadow-gray-900" : "shadow-green-900"
                  }`}
                >
                  <AnimatedCorners>
                    <input
                      type="submit"
                      disabled={disabled}
                      value="Send message"
                      className="font-IBM-Plex-Mono font-bold  text-green-200 disabled:text-gray-600 text-xl bg-black"
                    />
                  </AnimatedCorners>
                </div>
                <label className="text-sm text-white w-full text-center">
                  {result}
                </label>
              </div>
            </div>
          </>
        ) : (
          <span className="text-green-500 whitespace-nowrap">Contact me</span>
        )}
      </form>
    </section>
  );
}
