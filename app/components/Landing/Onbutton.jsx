"use client";
import { useState, useEffect } from "react";
import { PopupButton } from "react-calendly";

const Onbutton = () => {
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.querySelector("body"));
    }
  }, []);

  return (
    <PopupButton
    url="https://calendly.com/dupscaled/free-meeting"
      rootElement={rootElement}
      text="Click here to schedule!"
    />
  );
};

export default Onbutton;
