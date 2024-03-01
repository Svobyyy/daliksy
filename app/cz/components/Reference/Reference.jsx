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
  {
    name: "Gamdom",
    description: "World's biggest on-line casino",
    image: "gamdom.png",
  },
  {
    name: "Jiri BJP Prochazka",
    description: "Former UFC Light Heavyweight Champion",
    image: "jiri.png",
  },
  {
    name: "Milad Mirg",
    tiktok: "6.4M+",
    youtube: "6.5M+",
    image: "milad.png",
  },
  {
    name: "The MAG",
    description: "The biggest video magazine in the Czech Republic",
    image: "mag.png",
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

              {clients[client].description ? (
                <p>{clients[client].description}</p>
              ) : (
                <>
                  {clients[client].tiktok && (
                    <p>
                      <b>{clients[client].tiktok} </b>Tiktok Followers
                    </p>
                  )}

                  {clients[client].instagram && (
                    <p>
                      <b>{clients[client].instagram} </b>Instagram Followers
                    </p>
                  )}

                  {clients[client].youtube && (
                    <p>
                      <b>{clients[client].youtube}</b> Youtube Subscribers
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

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

          <div className={`${styles.channel} ${styles.channel_opacity}`}>
            <Image
              src={`/channels/${
                clients.length === client + 1
                  ? clients[0].image
                  : clients[client + 1].image
              }`}
              width={91}
              height={91}
              alt="Picture of the author"
            />
            <div className={styles.channel_info}>
              <h4>
                {clients.length === client + 1
                  ? clients[0].name
                  : clients[client + 1].name}
              </h4>
              <p>
                <b>
                  {clients.length === client + 1
                    ? clients[0].instagram
                    : clients[client + 1].instagram}{" "}
                </b>
                Instagram Followers
              </p>
              <p>
                <b>
                  {clients.length === client + 1
                    ? clients[0].youtube
                    : clients[client + 1].youtube}
                </b>{" "}
                Youtube Subscribers
              </p>
            </div>
          </div>

          <div
            className={`${styles.channel} ${styles.channel_opacityfix} ${styles.channel_opacity} `}
          >
            <Image
              src={`/channels/${
                client === 0
                  ? clients[clients.length - 1].image
                  : clients[client - 1].image
              }`}
              width={91}
              height={91}
              alt="Picture of the author"
            />
            <div className={styles.channel_info}>
              <h4>
                {client === 0
                  ? clients[clients.length - 1].name
                  : clients[client - 1].name}
              </h4>

              <p>
                <b>
                  {client === 0
                    ? clients[clients.length - 1].tiktok
                    : clients[client - 1].tiktok}
                </b>
                Tiktok Followers
              </p>

              <p>
                <b>
                  {client === 0
                    ? clients[clients.length - 1].instagram
                    : clients[client - 1].instagram}
                </b>
                Instagram Followers
              </p>

              <p>
                <b>
                  {client === 0
                    ? clients[clients.length - 1].youtube
                    : clients[client - 1].youtube}
                </b>{" "}
                Youtube Subscribers
              </p>
            </div>
          </div>
        </div>

        <p className={styles.reference_side}>
          Client highlights, contact us for a full client list.
        </p>
      </div>

      <div className={styles.radial} />
    </section>
  );
};

export default Reference;
