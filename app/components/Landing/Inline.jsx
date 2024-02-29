"use client";

import { PopupWidget } from "react-calendly";
import { useState, useEffect } from "react";

const Inline = () => {
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
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    )
  );
};

export default Inline;
