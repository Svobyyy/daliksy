"use client";

import { PopupWidget } from "react-calendly";
import { useState, useEffect } from "react";
import data from "@/data.json";

const { popup } = data;

const SchedulePopUp = ({ language }) => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.querySelector("body"));
    }
  }, []);

  return (
    rootElement && (
      <PopupWidget
        url="https://calendly.com/dupscaled/free-meeting"
        rootElement={rootElement}
        text={popup[language]}
        textColor="#ffffff"
        color="#00a2ff"
      />
    )
  );
};

export default SchedulePopUp;
