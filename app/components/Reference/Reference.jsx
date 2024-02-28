"use client";

import { useState } from "react";
import styles from "./Reference.module.css";
import Image from "next/image";

const clients = [
  {
    name: "Jarvis",
    tiktok: "3M+",
    instagram: "2M+",
    youtube: "5M+",
    image: "jarvis.png",
  },
  {
    name: "MrSavage",
    tiktok: "3M+",
    instagram: "2M+",
    youtube: "2M+",
    image: "savage.png",
  },
  {
    name: "Faze Replays",
    tiktok: "750K+",
    instagram: "500K+",
    youtube: "1.3M+",
    image: "replays.png",
  },
  {
    name: "Jon Sandman",
    tiktok: "550K+",
    instagram: "100K+",
    youtube: "1M+",
    image: "jon.png",
  },
];

const Reference = () => {
  const [client, setClient] = useState(0);

  return (
    <section className={styles.reference} id="references">
      <h3>
        Trusted by superstars all<br></br> around the world
      </h3>

      <div>
        <div className={styles.reference_main}>
          <div className={styles.channel}>
            <Image
              src={`/channels/${clients[client].image}`}
              width={91}
              height={91}
              alt="Picture of the author"
            />
            <div className={styles.channel_info}>
              <h4>{clients[client].name}</h4>
              <p>
                <b>{clients[client].instagram} </b>Instagram Followers
              </p>
              <p>
                <b>{clients[client].youtube}</b> Youtube Subscribers
              </p>
              <span>Dupscaled since March of 2023.</span>
            </div>
          </div>

          <div
            className={styles.next}
            onClick={() => {
              if(client + 1 === clients.length )
              {
                return  setClient(0);
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

          <div className={`${styles.channel} ${styles.channel_opacity}`}>
            <Image
              src={`/channels/${clients[client].image}`}
              width={91}
              height={91}
              alt="Picture of the author"
            />
            <div className={styles.channel_info}>
              <h4>{clients[client].name}</h4>
              <p>
                <b>{clients[client].instagram} </b>Instagram Followers
              </p>
              <p>
                <b>{clients[client].youtube}</b> Youtube Subscribers
              </p>
              <span>Dupscaled since March of 2023.</span>
            </div>
          </div>

          <div
            className={`${styles.channel} ${styles.channel_opacityfix} ${styles.channel_opacity} `}
          >
            <Image
              src={`/channels/${clients[client].image}`}
              width={91}
              height={91}
              alt="Picture of the author"
            />
            <div className={styles.channel_info}>
              <h4>{clients[client].name}</h4>
              <p>
                <b>{clients[client].instagram} </b>Instagram Followers
              </p>
              <p>
                <b>{clients[client].youtube}</b> Youtube Subscribers
              </p>
              <span>Dupscaled since March of 2023.</span>
            </div>
          </div>
        </div>

        <p className={styles.reference_side}>
          *Client highlights, contact us for a full client list.
        </p>
      </div>

      <div className={styles.radial} />
    </section>
  );
};

export default Reference;
