"use client";
import data from "@/data.json";
import { useState } from "react";
import styles from "./Clients.module.css";
import Image from "next/image";
import Client from "./Client";
import { renderText } from "@/lib/utils";
import NextArrow from "../UI/NextArrow";

const { clients, clients_title, clients_highlight } = data;

const Clients = ({ language }) => {
  const [client, setClient] = useState(0);

  return (
    <section className={styles.reference} id="references">
      <h3>{renderText(clients_title[language])}</h3>

      <section className={styles.wrapper}>
        <div className={styles.reference_main}>
          <ul className={styles.clients}>
            {clients.map((clientData, index) => (
              <Client
                clientData={clientData}
                index={index}
                client={client}
                key={index}
                totalClients={clients.length}
                language={language}
              />
            ))}
          </ul>

          <NextArrow
            onClickFunction={() => {
              setClient((clientNumber) => (clientNumber + 1) % clients.length);
            }}
          />
        </div>

        <p className={styles.reference_side}>{clients_highlight[language]}</p>
      </section>

      <div className={styles.radial} />
    </section>
  );
};

export default Clients;
