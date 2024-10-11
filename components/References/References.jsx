"use client";

import styles from "./References.module.css";
import NextArrow from "../UI/NextArrow";
import data from "@/data.json";
import { useState } from "react";
import ReferenceProfile from "./ReferenceProfile";
import Reference from "./Reference";

const { references } = data;

export default function References({ language }) {
  const [refNumber, setRefNumber] = useState(0);

  console.log(refNumber);

  return (
    <div className={styles.references_wrapper}>
      <section className={styles.references}>
        <NextArrow
          flip
          onClickFunction={() =>
            setRefNumber(
              (rNumber) => (rNumber - 1 + references.length) % references.length
            )
          }
        />

        <ul className={styles.reference_text_wrapper}>
          {references.map((reference, index) => {
            return (
              <ReferenceProfile
                key={reference.name}
                index={index}
                refer={reference}
                refNumber={refNumber}
                language={language}
              />
            );
          })}
        </ul>

        <NextArrow
          onClickFunction={() =>
            setRefNumber((rNumber) => (rNumber + 1) % references.length)
          }
        />
      </section>

      <ul>
        {references.map((reference, index) => {
          return (
            <Reference
              key={reference.name}
              index={index}
              refer={reference}
              refNumber={refNumber}
              language={language}
            />
          );
        })}
      </ul>

      <ul className={styles.reference_text_wrapper_mobile}>
          {references.map((reference, index) => {
            return (
              <ReferenceProfile
                key={reference.name}
                index={index}
                refer={reference}
                refNumber={refNumber}
                language={language}
              />
            );
          })}
        </ul>
    </div>
  );
}
