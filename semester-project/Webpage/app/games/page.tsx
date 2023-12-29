"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";
import water from "@/public/hero/Water.png";
import vr2 from "@/public/hero/VR2.png";
import zombie from "@/public/hero/zombie.png";
import tower from "@/public/hero/Tower.png";

interface CardData {
  id: number;
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    imageSrc: tower,
    title: "Petra Prototype",
    description: "Tower defense, hack and slash",
  },
  {
    id: 2,
    imageSrc: vr2,
    title: "Veronica Virtual",
    description: "Tycoon, enemy defense",
  },
  {
    id: 3,
    imageSrc: zombie,
    title: "Gabriela Guts",
    description: "Mecha, zombie survival",
  },
  {
    id: 4,
    imageSrc: water,
    title: "Kaia Kelp",
    description: "Underwater, sea protection",
  },
];

const Card: React.FC<CardData & { even: boolean }> = ({
  id,
  imageSrc,
  title,
  description,
  even,
}) => (
  <div
    className={`card ${even ? "bg-gradient-to-t from-blue-900 to-blue-700" : "bg-gradient-to-t from-blue-800 to-blue-600"} rounded-md`}
    style={{ padding: "20px", marginBottom: "0", width: "100%" }}
  >
    {typeof imageSrc === "string" ? (
      <img src={imageSrc} alt={title} style={{ width: "100%", height: "auto" }} />
    ) : (
      <Image
        src={imageSrc}
        alt={title}
        layout="responsive"
        width={100}
        height={100}
        className="rounded-md"
        style={{
          objectFit: "cover",
        }}
      />
    )}
    <h2 className="text-brand-blue-100">{title}</h2>
    <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl p-10">
      {description}
    </p>
  </div>
);

const CardGrid: React.FC = () => (
  <>
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card key={card.id} {...card} even={index % 2 === 0} />
      ))}
    </div>

    <style jsx>{`
      .card-grid {
        gap: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }

      @media (max-width: 767px) {
        .card-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </>
);

const Games: React.FC = () => (
  <main className="justify-between items-center pt-16">
    <section className="justify-center p-16 mx-auto bg-blue-800">
      <div className="text-center text-brand-blue-50 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
        <div className="flex flex-col items-center justify-start gap-5">
          <div className="text-center  font-bold p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-100 pb-10">
              Our game library
            </h1>
            <p className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl pb-10">
              Games we have released are listed below.
            </p>
            <CardGrid />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Games;