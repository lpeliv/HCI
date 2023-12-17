import React from "react";
import Image, { StaticImageData } from "next/image";
import unrealPreview from "@/public/hero/UnrealGameImage1.png";
import vr2 from "@/public/hero/VR2.png";
import zombie from "@/public/hero/zombie.png";
import hammerHD from "@/public/hero/hammerHD.png";

// Dummy data for illustration
interface CardData {
  id: number;
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    imageSrc: hammerHD,
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
    imageSrc: unrealPreview,
    title: "Kaia Kelp",
    description: "Underwater, sea protection",
  },
];

const Card: React.FC<CardData & { even: boolean }> = ({ id, imageSrc, title, description, even }) => (
  <div className={`card ${even ? 'bg-blue-200' : 'bg-blue-400'} rounded-md`} style={{ padding: '20px', marginBottom: '0' }}>
    {typeof imageSrc === 'string' ? (
      <img src={imageSrc} alt={title} />
    ) : (
      <Image
        src={imageSrc}
        alt={title}
        layout="responsive"
        className="rounded-md relative max-w-[1000px] w-full aspect-w-4 aspect-h-2"
        style={{
          objectFit: "cover",
          ...(id === 1 ? { transform: 'rotate(-45deg)' } : {}),
        }}
      />
    )}
    <h2 className="text-brand-blue-900">{title}</h2>
    <p>{description}</p>
  </div>
);

const CardGrid: React.FC = () => (
  <div className="card-grid" style={{ gap: '20px' }}>
    {cardData.map((card, index) => (
      <Card
        key={card.id}
        {...card}
        even={index % 2 === 0}
      />
    ))}
  </div>
);

export default function Games() {
  return (
    <main className="justify-between items-center pt-16">
      <section className="justify-center p-10 mx-auto bg-blue-300">
        <div className="font-roboto-condensed whitespace-break-spaces text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5">
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="relative max-w-[1000px] w-full aspect-w-4 aspect-h-2">
              <div className=" whitespace-break-spaces text-center font-bold text-brand-blue-50 whitespace-nowrap text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl p-5" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-brand-blue-900">
                  Our game library
                </h1>
                <p className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl p-5 ">
                  Games we have / plan to {" "}
                  <span className="text-brand-blue-900">
                    release
                  </span>
                  {" "}are listed below.
                  <CardGrid />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}