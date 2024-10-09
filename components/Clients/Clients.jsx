"use client";
import data from "@/data.json";
import { useState } from "react";
import styles from "./Clients.module.css";
import Image from "next/image";
import Client from "./Client";
import { renderText } from "@/lib/utils";

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

          <div
            className={styles.next}
            onClick={() => {
              if (client + 1 === clients.length) {
                return setClient(0);
              }
              setClient(client + 1);
            }}
          >
            <Image
              className={styles.next}
              src="/clients.svg"
              width={53}
              height={53}
              alt="Arrow for clients"
            />
          </div>
        </div>

        <p className={styles.reference_side}>{clients_highlight[language]}</p>
      </section>

      <div className={styles.radial} />
    </section>
  );
};

export default Clients;
