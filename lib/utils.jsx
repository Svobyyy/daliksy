import { Fragment } from "react";

export function renderText(text) {
  return text.split("<br>").map((item, index) => (
    <Fragment key={index}>
      {item}
      {index < text.split("<br>").length - 1 && <br />}
    </Fragment>
  ));
}
