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
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={rootElement}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    )
  );
};

export default Inline;
