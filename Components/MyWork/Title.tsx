import React from "react";

export default function Title({ text = "" }) {
  return (
    <label className="text-green-500 font-IBM-Plex-Mono font-bold text-xl">{text}</label>
  );
}
